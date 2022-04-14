const mongoose = require('mongoose')

const VolunteerSectionSchema = mongoose.Schema({
  event: { type: mongoose.Schema.ObjectId, ref: 'Event', required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  volunteerCoordinator: [{ type: mongoose.Schema.ObjectId, ref: 'VolunteerCoordinator' }]
})

module.exports = mongoose.model('VolunteerSection', VolunteerSectionSchema)
