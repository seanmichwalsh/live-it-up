const mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
    eventName: {type: String, required: true}, 
    committees: [{type: mongoose.Schema.ObjectId, ref: 'Committee'}],
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true}
}) 

module.exports = mongoose.model('Event', EventSchema);