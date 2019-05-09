require('dotenv').config();
require('./configs/mongo');
require('./configs/passport');

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const passport     = require('passport');
const cors         = require('cors');

const app          = express();


/////////////////////////////////////////////////////
////////////// PASSPORT SETTINGS ////////////////////
/////////////////////////////////////////////////////

/////////////// MIDDLEWARE  ///////////////

// création de la session user
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// Cors middleware to connect both Front to back
app.use(cors({
  credentials:true,
  origin: ['http://localhost:3000']
}))

// middleware passport 
app.use(passport.initialize());
app.use(passport.session());

// Connection to authentification routes and server web site
const index = require('./routes/index');
const authRoutes   = require("./auth/auth_routes")
app.use('/', index);
app.use('/auth', authRoutes)

// Middleware Setup irongenerator
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
