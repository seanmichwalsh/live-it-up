var express = require('express');
var router  = express.Router();
var path = require('path');
const dotenv = require("dotenv").config()

var session = require('express-session');
//const MongoStore = require('connect-mongo');

router.use(session({
    secret: `${process.env.EXPRESS_SESSION_SECRET}`, 
    resave: false, 
    saveUninitialized: true,
    //store: MongoStore.create({}). Persistence (ish) of sessions.
})) ;

router.use('/api/v1', require('./api'));

module.exports = router;