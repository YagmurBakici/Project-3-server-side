const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
  need: {
    type: Boolean,
    required: true
  },
  description: {
    type: String
  },
  serviceFee: {
    type: Number,
    default: 200
  }
});
module.exports = mongoose.model("Insurance", insuranceSchema);
