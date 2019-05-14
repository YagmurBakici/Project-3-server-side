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

router.get("/", (req, res) => {
  City.find()
    .then(dbRes => res.json({ dbRes }))
    .catch(dbErr => console.log(dbErr));
});

router.delete("/:id", () => {
  City.findByIdAndRemove(req.params.id)
    .then(dbRes => console.log("this city was deleted successfully"))
    .catch();
});

module.exports = router;
