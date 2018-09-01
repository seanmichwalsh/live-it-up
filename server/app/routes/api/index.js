var router = require('express').Router();

// simply returns the IP of the user. For testing purposes only
router.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({ip_address : ip});
});
router.use('/users', require('./user'));
router.use('/committees', require('./committee'));
router.use('/events', require('./event'));

module.exports = router;