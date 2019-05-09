const Insurance = require("./../models/Insurance");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  const { need, description, serviceFee } = req.body;
  const newInsurance = new Insurance({
    need,
    description,
    serviceFee
  });
  newInsurance
    .save()
    .then(() => res.status(200).json({ msg: "insurance id saved" }))
    .catch(err => console.log(err));
});

module.exports = router;
