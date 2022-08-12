const Vehicals = require("../model/vehicals");
const Appoinments = require("../model/Appointment");
const Locations = require("../model/location");

exports.newAppoinment = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(406).json("error found");
    }
    // console.log(req.body);
    const {
      name,
      companyName,
      purposeOfVisit,
      vehicalNo,
      locationId,
      date,
    } = req.body;
    if (
      !name ||
      !companyName ||
      !purposeOfVisit ||
      !vehicalNo ||
      !locationId ||
      !date
    ) {
      return res.status(406).json("Fill all the details");
    }
    const findLocation = await Locations.findById({ _id: locationId });
    const foundLocation = `${findLocation.companyName} ${findLocation.location}`;

    const Appoinment = new Appoinments({
      name,
      usersCompanyName: companyName,
      purposeOfVisit,
      vehicalNo,
      locationId,
      appointmentDate: date,
      locationName: foundLocation,
    });

    const newAppoinment = await Appoinment.save();
    console.log(newAppoinment);

    const Vehical = new Vehicals({
      status: "Appoinment registered",
      date,
      vehicalNo,
      locationId,
      appointmentId: newAppoinment._id,
    });

    const newVehical = await Vehical.save();
    console.log(newVehical);

    const finalAppoinmentResult = await Appoinments.findByIdAndUpdate(
      newAppoinment._id,
      { vehicalDetailsId: newVehical._id },
      { new: true }
    );

    return res.status(200).json(finalAppoinmentResult);
  } catch (error) {
    return res.status(500).json("Error while registration");
  }
};

exports.allAppoinments = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(406).json("error found");
    }

    console.log("first");

    const Appoinment = await Appoinments.find();
    console.log(Appoinment);
    return res.status(200).json(Appoinment);
  } catch (error) {
    return res.status(500).json("error");
  }
};
