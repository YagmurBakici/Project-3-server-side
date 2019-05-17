const Housing = require("../models/Housing");
const Cities = require("../models/City");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  Housing.create(req.body)
    .then(() => res.status(200).json({ msg: "housing id saved" }))
    .catch(err => console.log(err));
});

/// rajouté le 14/05 par A
router.get("/", (req, res) => {
  Housing.find()
    .populate("city")
    .then(dbRes => res.json(dbRes))
    .catch(dbErr => console.log(dbErr));
});

router.get("/paris/houses", (req, res) => {
  console.log("this inside paris houses");
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
    .then(dbRes => res.status(200).json(dbRes))
    .catch(dbErr => res.status(401).json(dbErr));
});

module.exports = router;
