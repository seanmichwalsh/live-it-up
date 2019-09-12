router = require('express').Router()
const VolunteerPosition = require('../../models/volunteerPosition.models');

router.get('/', (req, res) => {
    VolunteerPosition.find().then(volunteerPosition => {
        res.send(volunteerPosition)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving volunteer positions."
        });
    });
});

// Using ID for now for unique identifier
router.get('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "A valid volunteer position ID is required to find that volunteer coordinator"
        });
    };
    VolunteerPosition.findOne({ '_id' : req.params.id }).then(volunteerPosition => {
        if (!volunteerPosition) {
            return res.status(404).send({
                message: "Volunteer position not found with ID " + req.params.id
            });
        };
        res.send(volunteerPosition);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Volunteer position not found with ID " + req.params.id
            });
        }
        return res.status(500).send({
            message: "There was a problem retrieving volunteer position " + req.params.id
        });
    });
});

router.post('/', (req, res) => {
    if (!(req.body.section && req.body.volunteer && req.body.volunteerRole && req.body.start_time
        && req.body.end_time && req.body.hours)) {

        // error message needs to indicate which field(s) are missing
        return res.status(400).send({
            message: "All required fields must be present."
        });
    };

    if (VolunteerPosition.findOne({'_id': req.body.id}).then(volunteerPosition => {
        if (volunteerPosition) {
            return res.status(400).send({
                message: "A volunteer position with this ID already exists." + req.body.id
            });
        } else {
        const volunteerPosition = new VolunteerPosition({
            section: req.body.section,
            volunteer: req.body.volunteer,
            volunteerRole: req.body.volunteerRole,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            hours: req.body.hours
        })

        volunteerPosition.save().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
        }
    }).catch(err => {
        return res.status(500).send({
            message: "Internal server error"
        });
    }));
});

router.put('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "A valid id must be provided to update the volunteer position."
        });
    };

    VolunteerPosition.findOneAndUpdate({_id: req.params.id}, {
      section: req.body.section,
      volunteer: req.body.volunteer,
      volunteerRole: req.body.volunteerRole,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      hours: req.body.hours
    }, {new: true}).then( volunteerPosition=> {
        if (!volunteerPosition) {
            return res.status(404).send({
                message: "Volunteer position not found with id " + req.params.id
            })
        };
        res.send(volunteerPosition);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Volunteer position not found with id " + req.params.id
            });
        };
    });
});

router.delete('/:id', (req, res) => {
    VolunteerPosition.findOneAndRemove({_id: req.params.id})
    .then(volunteerPosition => {
        if(!volunteerPosition) {
            return res.status(404).send({
                message: "Volunteer position not found with ID " + req.params.id
            });
        }
        res.send({message: "Volunteer position deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Volunteer position not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete volunteer position with id " + req.params.id
        });
    });
});

module.exports = router;
