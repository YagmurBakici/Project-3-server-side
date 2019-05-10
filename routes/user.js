const express = require("express")
const router = new express.Router()
const userModel = require("../models/User")

router.post("/", (req,res) => {
    userModel.create(req.body)
    .then(dbRes => {
        res.status(200).json(dbRes)
    }).catch(dbErr => {
        res.status(500).json(dbErr)
    })
});

module.exports = router;