const Order = require("./../models/Order");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  const {
    city,
    housing,
    school,
    bank,
    insurance,
    communication,
    totalPrice
  } = req.body;
  const newOrder = new Order({
    city,
    housing,
    school,
    bank,
    insurance,
    communication,
    totalPrice
  });
  newOrder
    .save()
    .then(() => res.status(200).json({ msg: "housing id saved" }))
    .catch(err => console.log(err));
});

module.exports = router;
