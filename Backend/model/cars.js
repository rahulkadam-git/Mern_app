const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new mongoose.Schema({
  employeeId: {
    type: Schema.ObjectID,
    ref: "Users",
    require: true,
  },
  vehicalNo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Cars", carSchema);
