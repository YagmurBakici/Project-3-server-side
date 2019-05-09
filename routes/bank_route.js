const Bank = require("./../models/Bank");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  const { need, description, serviceFee } = req.body;
  const newBank = new Bank({
    need,
    description,
    serviceFee
  });
  newBank
    .save()
    .then(() => res.status(200).json({ msg: "bank id saved" }))
    .catch(err => console.log(err));
});

module.exports = router;
