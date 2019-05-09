const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
//////////////////////////////////////////////////////
///////////////////DOCS INFOS/////////////////////////
//////////////////////////////////////////////////////
//
// web status: https://restfulapi.net/http-status-codes/




//////////////////////////////////////////////////////
///////////////////SIGN UP AUTH///////////////////////
//////////////////////////////////////////////////////
authRoutes.post("/signup", (req, res) => {
  const mail = req.body.mail;
  const password = req.body.password;
  // Conditions de refus de log
  if (!mail || !password) {
    res
      .status(400)
      .json({ message: "Provide Username and password correctly please" });
    return;
  }
  if (password.length < 4) {
    res
      .status(400)
      .json({ message: "Your password must have more than 4 letters" });
    return;
  }
  User.findOne({ mail }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Wrong Mail" });
      return;
    }
    if (foundUser) {
      res.status(400).json({ message: "Mail already taken" });
      return;
    }
    const salt = bcrypt.genSaltSync(6);
    const hashPassword = bcrypt.hashSync(password, salt);
    const aNewUser = new User({
      mail: mail,
      password: hashPassword,
      firstName
    });
    aNewUser.save(err => {
      if (err) {
          console.log(err);
        res.status(400).json({ message: "Saving User database went wrong" });
        return;
      }
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Log after Signup went bad" });
        }
        res.status(200).json(aNewUser);
      });
    });
  });
});

//////////////////////////////////////////////////////
///////////////////LOGIN AUTH/////////////////////////
//////////////////////////////////////////////////////

authRoutes.post('/login',(req,res,next)=>{
    passport.authenticate('local',(err,theUser,failureDetails)=>{
        if(err){
            res.status(500).json({message:"Something went wrong inside the Autithication user"});
            return;
        }
        if(!theUser){
            res.status(401).json({failureDetails})
            return;
        }
        // save in the local session
        req.login(theUser,(err)=>{
            if (err) {
                res.status(500).json({message:"Session save bugged out"})
            }
            res.status(200).json(theUser);
        });
    })(req,res,next);
});

//////////////////////////////////////////////////////
///////////////////LOGOUT AUTH////////////////////////
//////////////////////////////////////////////////////

authRoutes.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});


//////////////////////////////////////////////////////
/////////////////LOGGEDIN AUTH////////////////////////
//////////////////////////////////////////////////////

authRoutes.get('/loggedin', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;