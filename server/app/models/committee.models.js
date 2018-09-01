const mongoose = require('mongoose');

var CommitteeSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    type: {type: String}
}) 

module.exports = mongoose.model('Committee', CommitteeSchema);