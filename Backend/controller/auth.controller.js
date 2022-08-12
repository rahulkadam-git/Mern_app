const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let SECRET_KEY = `75ZM.w]R++gGE&sf5,8gzr526FBu?<Wvp:qXuV$Gm6>"md3q"c`;

const User = require("../model/User.js");


//controller for register
exports.register = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(406).json("error found");
    }
    console.log(req.body)
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
      console.log(newUser)
      const user = await newUser.save();
      console.log(user,"nlaj;dk;ak;d")
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
