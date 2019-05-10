const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bankSchema = new Schema({
  need: {
    type: Boolean,
    required: true
  },
  description: {
    type: String
  },
  serviceFee: {
    type: Number,
    default: 150
  }
});
const Bank = mongoose.model("Bank", bankSchema);
module.exports = Bank;
