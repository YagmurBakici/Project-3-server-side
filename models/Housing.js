const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const housingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  city: { type: Schema.Types.ObjectId, ref: "City" },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number
  },
  housingType: {
    type: String,
    enum: ["house", "apartment"]
  },
  amenities: {
    balcony: { type: Boolean },
    terrace: { type: Boolean },
    garden: { type: Boolean },
    parking: { type: Boolean },
    handicapAccess: { type: Boolean },
    petFriendly: { type: Boolean }
  },
  lifestyle: {
    type: String,
    enum: ["family friendly", "lively", "young but calm"]
  },
  monthlyRent: {
    type: Number,
    required: true
  },
  serviceFee: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model("Housing", housingSchema);
