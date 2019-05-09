const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  city: { type: Schema.Types.ObjectId, ref: "City" },
  language: {
    type: String,
    enum: ["French", "English", "Korean"]
  },
  schoolType: {
    type: String,
    enum: ["private", "public"]
  },
  level: {
    type: [String],
    enum: ["preschool", "elementary school", "middle school", "high school"]
  },
  serviceFee: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model("School", schoolSchema);
