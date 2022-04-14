router = require('express').Router()
const VolunteerSection = require('../../models/volunteerSection.models')

router.get('/', (req, res) => {
  VolunteerSection.find().then(volunteerSections => {
    res.send(volunteerSections)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occured while retrieving volunteer sections.'
    })
  })
})

router.get('/:id', (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({
      message: 'A volunteer section is required to find the section'
    })
  };
  VolunteerSection.findOne({ _id: req.params.id }).then(volunteerSection => {
    if (!volunteerSection) {
      return res.status(404).send({
        message: 'Volunteer section not found with id ' + req.params.id
      })
    };
    res.send(volunteerSection)
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'Volunteer section not found with id ' + req.params.id
      })
    }
    return res.status(500).send({
      message: 'There was a problem retrieving volunteer section ' + req.params.id
    })
  })
})

router.post('/', (req, res) => {
  if (!(req.body.event && req.body.date && req.body.location &&
        req.body.volunteerCoordinator)) {
    // error message needs to indicate which field(s) are missing
    return res.status(400).send({
      message: 'All required fields must be present.'
    })
  };

  if (VolunteerSection.findOne({ _id: req.body.id }).then(volunteerSection => {
    if (volunteerSection) {
      return res.status(400).send({
        message: 'A volunteer section with this username already exists.' + req.body.id
      })
    } else {
      const volunteerSection = new VolunteerSection({
        event: req.body.event,
        date: req.body.date,
        location: req.body.location,
        volunteerCoordinator: req.body.volunteerCoordinator
      })

      volunteerSection.save().then(data => {
        res.send(data)
      }).catch(err => {
        res.status(500).send({
          message: err.message
        })
      })
    }
  }).catch(err => {
    return res.status(500).send({
      message: 'Internal server error'
    })
  }));
})

router.put('/:id', (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({
      message: 'A valid id must be provided to update the volunteer section.'
    })
  };

  VolunteerSection.findOneAndUpdate({ _id: req.params.id }, {
    event: req.body.event,
    date: req.body.date,
    location: req.body.location,
    volunteerCoordinator: req.body.volunteerCoordinator
  }, { new: true }).then(volunteerSection => {
    if (!volunteerSection) {
      return res.status(404).send({
        message: 'Volunteer section not found with id ' + req.params.id
      })
    };
    res.send(volunteerSection)
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'Volunteer section not found with id ' + req.params.id
      })
    };
  })
})

router.delete('/:id', (req, res) => {
  VolunteerSection.findOneAndRemove({ _id: req.params.id })
    .then(volunteerSection => {
      if (!volunteerSection) {
        return res.status(404).send({
          message: 'Volunteer section not found with ID ' + req.params.id
        })
      }
      res.send({ message: 'Volunteer section deleted successfully!' })
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Volunteer section not found with id ' + req.params.id
        })
      }
      return res.status(500).send({
        message: 'Could not delete volunteer section with id ' + req.params.id
      })
    })
})

module.exports = router
