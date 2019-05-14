const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    enum: ["Paris", "Miami", "Seoul"],
    required: true,
    unique: true
  }
});
module.exports = mongoose.model("City", citySchema);
