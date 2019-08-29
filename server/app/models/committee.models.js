const mongoose = require('mongoose');

var CommitteeSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    type: {type: String, required: true}
}) 

module.exports = mongoose.model('Committee', CommitteeSchema);