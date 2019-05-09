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

module.exports = router;
