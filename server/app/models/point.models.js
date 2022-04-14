const mongoose = require('mongoose')

const PointSchema = mongoose.Schema({
  date: { type: Date, required: true },
  // Category is a String for now, will likely become an enum or other type in the future
  category: { type: String, required: true },
  uid: { type: String, required: true },
  semester: { type: String, required: true },
  points: { type: Number, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('Points', PointSchema)
