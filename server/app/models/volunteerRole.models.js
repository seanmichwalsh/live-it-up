const mongoose = require('mongoose')

const VolunteerRoleSchema = mongoose.Schema({
  volunteerSection: { type: mongoose.Schema.ObjectId, ref: 'VolunteerSection', required: true },
  roleName: { type: String, required: true },
  roleDescription: { type: String }
})

module.exports = mongoose.model('VolunteerRole', VolunteerRoleSchema)
