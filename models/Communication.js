const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communicationSchema = new Schema({
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
module.exports = mongoose.model("Communication", communicationSchema);
