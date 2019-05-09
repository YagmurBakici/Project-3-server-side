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


const app = express();
// session are used for login puroposes


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// Add middleware passport 
app.use(passport.initialize());
app.use(passport.session());


//////////////////////////////////////////
///////////GENERATOR OUTPUT///////////////
//////////////////////////////////////////

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const index = require('./routes/index');
const authRoutes   = require("./auth/auth_routes")
app.use('/', index);
app.use('/auth', authRoutes)


module.exports = app;
