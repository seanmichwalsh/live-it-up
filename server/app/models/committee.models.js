const mongoose = require('mongoose');

var CommitteeSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    type: {type: String, required: true},
    active: {type: Boolean, default: true, required: true},
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    meetingDay: {type: String, required: true},
}) 

module.exports = mongoose.model('Committee', CommitteeSchema);