const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


var UserSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    onCampus: {type: Boolean, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true},
    uid: {type: String, index: true, uniqueCaseInsensitive: true, required: true},
    committees: [{type: mongoose.Schema.ObjectId, ref: 'Committee'}],
    mainCommittee: {type: mongoose.Schema.ObjectId, ref: 'Committee'},
    activeMember: {type: Boolean, required: true, default: true}
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);