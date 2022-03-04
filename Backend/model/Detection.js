const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
  flowerName: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  date:{
      type:Date,
      default:new Date(),
  }
  
});

module.exports = mongoose.model("Flowers", flowerSchema);
