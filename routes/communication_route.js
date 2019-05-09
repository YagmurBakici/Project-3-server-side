const Communication = require("./../models/Communication");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  const { need, description, serviceFee } = req.body;
  const newCommunication = new Communication({
    need,
    description,
    serviceFee
  });
  newCommunication
    .save()
    .then(() => res.status(200).json({ msg: "communication id saved" }))
    .catch(err => console.log(err));
});

module.exports = router;
