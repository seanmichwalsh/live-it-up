const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/committee', require('./committee'))
router.use('/event', require('./event'))
router.use('/point', require('./point'))
router.use('/pointsReport', require('./pointsReport'))
router.use('/volunteerCoordinator', require('./volunteerCoordinator'))
router.use('/volunteerPosition', require('./volunteerPosition'))
router.use('/volunteerRole', require('./volunteerRole'))
router.use('/volunteerSection', require('./volunteerSection'))
router.use('/resources', require('./resources'))
// router.use('/auth', require('./auth'));

module.exports = router
