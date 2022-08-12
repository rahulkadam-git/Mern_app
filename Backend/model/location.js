const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new mongoose.Schema({
  location: {
    type: String,
    require: true,
  },
  companyName: {
    type: String,
    require: true,
  },
  gates: [{ type: Schema.ObjectId, ref: "Gates" }],
});

module.exports = mongoose.model("Locations", locationSchema);
