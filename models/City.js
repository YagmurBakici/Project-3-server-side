const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: {
    type: String,
    enum: ["Paris", "Miami", "Seoul"],
    required: true
  }
});
module.exports = mongoose.model("City", citySchema);
