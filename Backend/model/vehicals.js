const mongoose = require("mongoose");
const { Schema } = mongoose;

const vehicalSchema = new mongoose.Schema({
  status: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  vehicalNo: {
    type: String,
    require: true,
  },
  locationId: {
    type: Schema.Types.ObjectId,
    ref: "Locations",
  },
  arrivalAt: {
    type: Date,
    require: true,
    default: new Date(),
  },
  departureAt: {
    type: Date,
    require: true,
    default: new Date(),
  },
  totalSpendTime: {
    type: String,
    require: true,
  },
  appointmentId: {
    type: Schema.Types.ObjectId,
    ref: "Appointments",
  },
});

module.exports = mongoose.model("Vehicals", vehicalSchema);
