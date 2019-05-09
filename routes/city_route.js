const City = require("./../models/City");
const express = require("express");
const router = express.Router();

router.post("/create", (req, res, next) => {
  const { name } = req.body;
  const newCity = new City({
    name
  });
  newCity
    .save()
    .then(() => res.status(200).json({ msg: "city id saved" }))
    .catch(err => console.log(err));
});

module.exports = router;
