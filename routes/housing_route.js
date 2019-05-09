const Housing = require("./../models/Housing");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  const {
    name,
    description,
    address,
    city,
    bedrooms,
    bathrooms,
    housingType,
    amenities,
    lifestyle,
    monthlyRent,
    serviceFee
  } = req.body;
  const newHousing = new Housing({
    name,
    description,
    address,
    city,
    bedrooms,
    bathrooms,
    housingType,
    amenities,
    lifestyle,
    monthlyRent,
    serviceFee
  });
  newHousing
    .save()
    .then(() => res.status(200).json({ msg: "housing id saved" }))
    .catch(err => console.log(err));
});

module.exports = router;
