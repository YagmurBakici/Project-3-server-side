const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
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
    subscriptions: [{ type: Schema.Types.ObjectId, ref: "Subscription" }],
    created_at: {
      type: Date,
      required: true,
      default: Date.now
    }
});
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
