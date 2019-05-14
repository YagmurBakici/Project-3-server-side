const Housing = require("../models/Housing");
const Cities = require("../models/City");
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

/// rajouté le 14/05 par A
router.get("/", (req, res) => {
  Housing.find()
    .then(dbRes => res.json(dbRes))
    .catch(dbErr => console.log(dbErr));
});

router.get("/paris/houses", (req, res) => {
  Housing.find({ city: "5cd99c7fea8b0e42229d6f1f" })
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/paris/houses/:id", (req, res) => {
  Housing.findById(req.params.id)
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/miami/houses", (req, res) => {
  Housing.find({ city: "5cd99c7fea8b0e42229d6f20" })
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/miami/houses/:id", (req, res) => {
  Housing.findById(req.params.id)
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/seoul/houses", (req, res) => {
  Housing.find({ city: "5cd99c7fea8b0e42229d6f21" })
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/seoul/houses/:id", (req, res) => {
  Housing.findById(req.params.id)
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.post("/edit/:id", (req, res) => {
  Housing.findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.delete("/:id", (req, res) => {
  Housing.findByIdAndRemove(req.params.id)
    .then(dbRes => console.log("this house was deleted successfully"))
    .catch();
});

module.exports = router;
