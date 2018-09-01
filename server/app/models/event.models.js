const mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
    eventName: {type: String, required: true}, 
    committees: [{type: mongoose.Schema.ObjectId, ref: 'Committee'}]
}) 

module.exports = mongoose.model('Event', EventSchema);