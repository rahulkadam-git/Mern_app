const mongoose = require("mongoose");
const { Schema } = mongoose;

const notificationSchema = new mongoose.Schema({
  status: {
    type: Number,
    require: true,
  },
  msg: {
    type: String,
  },
  time: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Notifications", notificationSchema);
