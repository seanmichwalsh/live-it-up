router = require('express').Router()
const VolunteerCoordinator = require('../../models/volunteerCoordinator.models');

router.get('/', (req, res) => {
    VolunteerCoordinator.find().then( volunteerCoordinators => {
        res.send(volunteerCoordinators)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving volunteer coordinators."
        });
    });
});

// Using ID for now for unique identifier
router.get('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "A valid volunteer coordinator ID is required to find that volunteer coordinator"
        });
    };
    VolunteerCoordinator.findOne({ _id : req.params.id }).then(volunteerCoordinator => {
        if (!volunteerCoordinator) {
            return res.status(404).send({
                message: "Volunteer coordinator not found with ID " + req.params.id
            });
        };
        res.send(volunteerCoordinator);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Volunteer coordinator not found with ID " + req.params.id
            });
        }
        return res.status(500).send({
            message: "There was a problem retrieving volunteer coordinator " + req.params.id
        });
    });
});

router.post('/', (req, res) => {
    if (!(req.body.volunteerSection && req.body.start_time && req.body.end_time && req.body.volunteerCoordinator)) {

        // error message needs to indicate which field(s) are missing
        return res.status(400).send({
            message: "All required fields must be present."
        });
    };

    if (VolunteerCoordinator.findOne({_id: req.body.id}).then(volunteerCoordinator => {
        if (volunteerCoordinator) {
            return res.status(400).send({
                message: "A volunteer coordinator with this ID already exists." + req.body.id
            });
        } else {
        const volunteerCoordinator = new VolunteerCoordinator({
            volunteerSection: req.body.volunteerSection,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            volunteerCoordinator: req.body.volunteerCoordinator
        })

        volunteerCoordinator.save().then(data => {
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
            message: "A valid id must be provided to update the volunteer coordinator."
        });
    };

    VolunteerCoordinator.findOneAndUpdate({_id: req.params.id}, {
      volunteerSection: req.body.volunteerSection,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      volunteerCoordinator: req.body.volunteerCoordinator
    }, {new: true}).then(volunteerCoordinator => {
        if (!volunteerCoordinator) {
            return res.status(404).send({
                message: "Volunteer coordinator not found with id " + req.params.id
            })
        };
        res.send(volunteerCoordinator);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Volunteer coordinator not found with id " + req.params.id
            });
        };
    });
});

router.delete('/:id', (req, res) => {
    VolunteerCoordinator.findOneAndRemove({_id: req.params.id})
    .then(volunteerCoordinator => {
        if(!volunteerCoordinator) {
            return res.status(404).send({
                message: "Volunteer coordinator not found with ID " + req.params.id
            });
        }
        res.send({message: "Volunteer coordinator deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Volunteer coordinator not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete volunteer coordinator with id " + req.params.id
        });
    });
});

module.exports = router;
