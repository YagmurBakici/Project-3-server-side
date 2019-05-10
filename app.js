require("dotenv").config();
require("./configs/mongo");
require("./configs/passport");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

const app = express();

/////////////////////////////////////////////////////
////////////// PASSPORT SETTINGS ////////////////////
/////////////////////////////////////////////////////

/////////////// MIDDLEWARE  ///////////////

// création de la session user
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

// Add middleware passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware Setup irongenerator
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Cors middleware to connect both Front to back
app.use(
  cors({
    credentials: true,
    origin: [process.env.REACT_DOMAIN]
  })
);

//////////////////////////////////////////
///////////GENERATOR OUTPUT///////////////
//////////////////////////////////////////

// Connection to authentification routes and server web site
const index = require("./routes/index");
const authRoute = require("./auth/auth_route");
const housingRoute = require("./routes/housing_route"); /////////////////////
const schoolRoute = require("./routes/school_route"); /////////////////////
const cityRoute = require("./routes/city_route"); /////////////////////
const bankRoute = require("./routes/bank_route"); /////////////////////
const insuranceRoute = require("./routes/insurance_route"); /////////////////////
const communicationRoute = require("./routes/communication_route"); /////////////////////
const orderRoute = require("./routes/order_route"); /////////////////////
const user = require("./routes/user")

// lorsque je vais à la route /school par exemple, j'utilise les méthodes définies dans mon fichier "communication_route" dans mon dossier "routes"
app.use("/", index);
app.use("/auth", authRoute);
app.use("/housing", housingRoute); /////////////////////
app.use("/school", schoolRoute); /////////////////////
app.use("/city", cityRoute); /////////////////////
app.use("/bank", bankRoute); /////////////////////
app.use("/insurance", insuranceRoute); /////////////////////
app.use("/communication", communicationRoute); /////////////////////
app.use("/order", orderRoute); /////////////////////
app.use("/user", user)

module.exports = app;
