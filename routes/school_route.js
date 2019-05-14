const School = require("./../models/School");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  const { name, city, language, schoolType, level, serviceFee } = req.body;
  const newSchool = new School({
    name,
    city,
    language,
    schoolType,
    level,
    serviceFee
  });
  newSchool
    .save()
    .then(() => res.status(200).json({ msg: "school id saved" }))
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  School.find()
    .then(dbRes => res.json(dbRes))
    .catch(dbErr => console.log(dbErr));
});

router.get("/paris/schools", (req, res) => {
  School.find({ city: "5cd99c7fea8b0e42229d6f1f" })
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/paris/schools/:id", (req, res) => {
  School.findById(req.params.id)
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/miami/schools", (req, res) => {
  School.find({ city: "5cd99c7fea8b0e42229d6f20" })
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/miami/schools/:id", (req, res) => {
  School.findById(req.params.id)
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/seoul/schools", (req, res) => {
  School.find({ city: "5cd99c7fea8b0e42229d6f21" })
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.get("/seoul/schools/:id", (req, res) => {
  School.findById(req.params.id)
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.post("/edit/:id", (req, res) => {
  School.findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.delete("/:id", (req, res) => {
  School.findByIdAndRemove(req.params.id)
    .then(dbRes => console.log("this house was deleted successfully"))
    .catch();
});

module.exports = router;
