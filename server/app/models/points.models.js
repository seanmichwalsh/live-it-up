const mongoose = require('mongoose');

var PointsSchema = mongoose.Schema({
    date:{type: Date, required: true},
    category: {type: String, required: true},
    uid: {type: String, required: true},
    semester: {type: Date, required: true},
    points: {type: Integer, required: true},
    description: {type: String, required: true},
}) 

module.exports = mongoose.model('Points', PointsSchema);