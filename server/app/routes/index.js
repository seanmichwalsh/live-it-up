var router  = require('express').Router();
var session = require('express-session');

router.use(session({
    secret: 'secret', 
    resave: false, 
    saveUninitialized: true
})) ;

router.use('/api/v1', require('./api'));

module.exports = router;