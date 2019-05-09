const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  city: { type: Schema.Types.ObjectId, ref: "City" },
  housing: { type: Schema.Types.ObjectId, ref: "Housing" },
  school: [{ type: Schema.Types.ObjectId, ref: "School" }],
  bank: { type: Schema.Types.ObjectId, ref: "Bank" },
  insurance: { type: Schema.Types.ObjectId, ref: "Insurance" },
  communication: { type: Schema.Types.ObjectId, ref: "Communication" },
  totalPrice: Number
});
module.exports = mongoose.model("Order", orderSchema);
