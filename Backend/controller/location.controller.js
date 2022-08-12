const Gates = require("../model/gates");
const Locations = require("../model/location");

exports.location = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(406).json("error found");
    }
    console.log(req.body);
    const { location, companyName } = req.body;
    if (!location || !companyName) {
      return res.status(406).json("Fill all the details");
    }

    const Location = new Locations({
      location,
      companyName,
    });
    const newLocation = await Location.save();
    console.log(newLocation);
    return res.status(200).json(newLocation);
  } catch (error) {
    return res.status(500).json("Error while registration");
  }
};

exports.gates = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(406).json("error found");
    }

    const { gate, location ,description} = req.body;
    if (!gate || !location) {
      return res.status(406).json("Fill all the details");
    }

    const Gate = new Gates({
      gate,
      location,
      description
    });

    const newGates = await Gate.save();

    const updatedLocation = await Locations.findByIdAndUpdate(
      { _id: location },
      { $push: { gates: newGates._id } },
      { new: true }
    );

    return res.status(200).json(newGates);
  } catch (error) {
    return res.status(500).json("Error while registration");
  }
};

exports.allLoctions = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(406).json("error found");
    }

    console.log("first");

    const Location = await Locations.find();
    console.log(Location);
    return res.status(200).json(Location);
  } catch (error) {
    return res.status(500).json("error");
  }
};