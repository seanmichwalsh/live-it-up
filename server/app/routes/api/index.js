var router = require('express').Router();

// simply returns the IP of the user. For testing purposes only
router.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({ip_address : ip});
});
router.use('/users', require('./user'));
router.use('/committees', require('./committee'));
router.use('/events', require('./event'));
router.use('/volunteerCoordinator', require('./volunteerCoordinator'));
router.use('/volunteerPosition', require('./volunteerPosition'));
router.use('/volunteerRole', require('./volunteerRole'));
router.use('/volunteerSection', require('./volunteerSection'));
router.use('/resources', require('./resources'));

module.exports = router;
