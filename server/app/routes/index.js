var express = require('express');
var router  = require('express').Router();
var path = require('path');

var session = require('express-session');

router.use(session({
    secret: 'secret', 
    resave: false, 
    saveUninitialized: true
})) ;

// router.use(express.static(path.join(__dirname, '/client/build')));

router.use('/api/v1', require('./api'));

router.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


module.exports = router;