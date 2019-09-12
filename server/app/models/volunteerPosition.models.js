const mongoose = require('mongoose');

var VolunteerPositionSchema = mongoose.Schema({
    section: {type: mongoose.Schema.ObjectId, ref: 'VolunteerSection', required: true},
    volunteer: {type: mongoose.Schema.ObjectId, ref: 'User'},
    volunteerRole: {type: mongoose.Schema.ObjectId, ref: 'VoluteerRole', required: true},
    start_time: {type: Date, required: true},
    end_time: {type: Date, required: true},
    hours: {type: Date, required: true},
    // volunteerCoordinator: {type: mongoose.Schema.ObjectId, ref: 'VolunteerCoordinator', required: true}
}) 

module.exports = mongoose.model('VolunteerPosition', VolunteerPositionSchema);