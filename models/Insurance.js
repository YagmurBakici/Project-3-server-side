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
    required: true
  }
});
module.exports = mongoose.model("Insurance", insuranceSchema);
