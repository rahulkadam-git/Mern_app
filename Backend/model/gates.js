const mongoose = require("mongoose");
const { Schema } = mongoose;

const gateSchema = new mongoose.Schema({
  gate: {
    type: String,
  },
  location: {
    type: Schema.Types.ObjectId,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Gates", gateSchema);
