var express = require('express');
var router  = express.Router();
var path = require('path');

var session = require('express-session');
//const MongoStore = require('connect-mongo');

router.use(session({
    secret: 'secret', 
    resave: false, 
    saveUninitialized: true,
    //store: MongoStore.create({}). Persistence (ish) of sessions.
})) ;

router.use('/api/v1', require('./api'));

module.exports = router;