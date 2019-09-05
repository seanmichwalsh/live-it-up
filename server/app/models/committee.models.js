const mongoose = require('mongoose');

var CommitteeSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    type: {type: String, required: true},
    active: {type: String, default: true},
}) 

module.exports = mongoose.model('Committee', CommitteeSchema);