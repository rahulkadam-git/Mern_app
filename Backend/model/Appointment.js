const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  usersCompanyName: {
    type: String,
    required: true,
  },
  purposeOfVisit: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: Date,
    require: true,
  },
  vehicalNo: {
    type: String,
    required: true,
  },
  locationId: {
    type: Schema.Types.ObjectId,
    ref: "Locations",
    required: true,
  },
  locationName: {
    type: String,
  },
  vehicalDetailsId: {
    type: Schema.Types.ObjectId,
    ref: "Vehicals",
  },
  appointmentCreatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Appointments", appointmentSchema);
