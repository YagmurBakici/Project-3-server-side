const express = require("express");
const router = new express.Router();
const userModel = require("../models/User");

router.post("/", (req, res) => {
  userModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.get("/myProfile/:id", (req, res) => {
  userModel
    .findById(req.params.id)
    .then(dbRes => {
        console.log(dbRes)
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(200).json(dbErr);
    });
});

router.post("/myProfile/edit/:id", (req, res) => {
  userModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(200).json(dbErr);
    });
});

module.exports = router;
