const mongoose = require('mongoose');

var CommitteeSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    type: {type: String, required: true},
    active: {type: String, default: true},
    meeting: {type: Date, required: true}
    // var ect = new Date(2019, 9, 30, 1, 15)
    // then frontend can bring the time and day
    // var day  = d.getDay() will return Monday 
    // var hr = d.getHours()
    // var min = d.getMinutes()
}) 

module.exports = mongoose.model('Committee', CommitteeSchema);