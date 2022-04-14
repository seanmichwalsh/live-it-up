const mongoose = require('mongoose')

const VolunteerCoordinatorSchema = mongoose.Schema({
  volunteerSection: { type: mongoose.Schema.ObjectId, ref: 'VolunteerSection', required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  volunteerCoordinator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('VolunteerCoordinator', VolunteerCoordinatorSchema)
