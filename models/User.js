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
  nbAdults: {
    type: Number,
    default: 0
  },
  nbChildren: {
    type: Number,
    default: 0
  },
  role: {
    type:String,
    default: "user",
    enum: ["user", "admin"]
  },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
