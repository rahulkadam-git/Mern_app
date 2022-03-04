const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let SECRET_KEY = `75ZM.w]R++gGE&sf5,8gzr526FBu?<Wvp:qXuV$Gm6>"md3q"c`;

const User = require("../model/User.js");
const Flower = require("../model/Detection");

//controller for register
exports.register = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(406).json("error found");
    }
    const { name, surname, password, userType } = req.body;
    if (!name || !surname || !password || !userType) {
      return res.status(406).json("Fill all the details");
    }
    //hashing password
    const hashedPass = bcrypt.hashSync(password, 10);
    const lastUser = await User.aggregate([
      { $group: { _id: null, lastEcode: { $max: "$eCode" } } },
    ]);
    if (lastUser.length === 0) {
      lastUser.push({ _id: null, lastEcode: "1000" });
    }
    const lastEcode = Number(lastUser[0].lastEcode) + 1;
    const username = String(lastEcode) + name;
    const foundUser = await User.findOne({ username });
    if (foundUser) {
      return res.status(406).json(`User with ${username} already exist`);
    } else {
      const newUser = new User({
        name,
        surname,
        eCode: String(lastEcode),
        password: hashedPass,
        userType,
        username,
      });
      const user = await newUser.save();
      const response = `Your eCode is ${newUser.eCode}`;
      return res.status(200).json(response);
    }
  } catch (error) {
    return res.status(500).json("Error while registration");
  }
};

//controller for login
exports.login = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(406).json("error found");
    }
    const { eCode, password } = req.body;
    if (!eCode || !password) {
      return res.status(406).json("Fill all the details");
    }
    const user = await User.findOne({ eCode });

    if (!user) {
      return res.status(406).json("User not found");
    }

    //compare password

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(406).json("Invalid credentials");

    const token = jwt.sign(
      {
        eCode: user.eCode,
        Name: user.name,
        Surname: user.surname,
        userType: user.userType,
        username: user.username,
        response: `Welcome ${user.name} ${user.surname}`,
      },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      eCode: user.eCode,
      Name: user.name,
      Surname: user.surname,
      userType: user.userType,
      username: user.username,
    });
  } catch (error) {
    res.status(500).json("Error while login");
  }
};
//controller for detection

exports.detection = async (req, res) => {
  try {
    if (!req.body) {
      res.status(402).json("data not found");
    }
    const { flowerName, percentage } = req.body;

    if (!flowerName || !percentage) {
      return res.status(402).json("check details again");
    }

    const newFlowerDetected = new Flower({
      flowerName,
      percentage,
    });

    const flower = await newFlowerDetected.save();
    if (flower) {
      return res.status(200).json(flower);
    }
  } catch (error) {
    return res.status(500).json("detection failed");
  }
};

exports.getFlowerData = async (req, res) => {
  try {
    if (!req.params) {
      res.status(400).json("data not found");
    }
    const { date } = req.params;
    const newDate = new Date(date);
    const nextDay = newDate.getDate() + 1;
    const ltDateYear = newDate.getFullYear();
    const ltDateMonth = newDate.getMonth() + 1;
    let ltDate = ltDateYear + "-" + "0" + ltDateMonth + "-" + nextDay;
    const result = await Flower.find({
      date: { $gte: date, $lte: ltDate },
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json("error");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json("data not found");
    }

    const result = await User.find();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json("error");
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    if (!req.params) {
      res.status(400).json("data not found");
    }
    const { _id } = req.params;

    const result = await User.findOne({ _id });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json("error");
  }
};
