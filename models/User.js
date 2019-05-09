const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true
  },
  nbAdults: {
    type: Number,
    required: true
  },
  nbChildren: {
    type: Number,
    required: true
  },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
});
module.exports = mongoose.model("User", userSchema);
