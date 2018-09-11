router = require('express').Router()
const VolunteerRole = require('../../models/volunteerRole.models');

router.get('/', (req, res) => {
    VolunteerRole.find().then( volunteerRoles => {
        res.send(volunteerRoles)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving volunteer roles."
        });
    });
});

// Using ID for now, but could maybe be roleName?
router.get('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "A valid volunteer role ID is required to find one volunteer role"
        });
    };
    VolunteerRole.findOne({ 'id' : req.params.id }).then(volunteerRole => {
        if (!volunteerRole) {
            return res.status(404).send({
                message: "Volunteer role not found with ID " + req.params.id
            });
        };
        res.send(volunteerRole);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Volunteer role not found with ID " + req.params.id
            });
        }
        return res.status(500).send({
            message: "There was a problem retrieving volunteer role " + req.params.id
        });
    });
});

router.post('/', (req, res) => {
    if (!(req.body.volunteerSection && req.body.roleName && req.body.roleDescription)) {

        // error message needs to indicate which field(s) are missing
        return res.status(400).send({
            message: "All required fields must be present."
        });
    };

    if (VolunteerRole.findOne({'id': req.body.id}).then(volunteerRole => {
        if (volunteerRole) {
            return res.status(400).send({
                message: "A volunteer role with this ID already exists." + req.body.id
            });
        } else {
        const volunteerRole = new VolunteerRole({
            volunteerSection: req.body.volunteerSection,
            roleName: req.body.roleName,
            roleDescription: req.body.roleDescription
        })

        volunteerRole.save().then(data => {
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
            message: "A valid id must be provided to update the volunteer role."
        });
    };

    VolunteerRole.findOneAndUpdate({id: req.params.id}, {
      volunteerSection: req.body.volunteerSection,
      roleName: req.body.roleName,
      roleDescription: req.body.roleDescription
    }, {new: true}).then(volunteerRole => {
        if (!volunteerRole) {
            return res.status(404).send({
                message: "Volunteer role not found with id " + req.params.id
            })
        };
        res.send(volunteerRole);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Volunteer role not found with id " + req.params.id
            });
        };
    });
});

router.delete('/:id', (req, res) => {
    VolunteerRole.findOneAndRemove({id: req.params.id})
    .then(volunteerRole => {
        if(!volunteerRole) {
            return res.status(404).send({
                message: "Volunteer role not found with ID " + req.params.id
            });
        }
        res.send({message: "Volunteer role deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Volunteer role not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete volunteer role with id " + req.params.id
        });
    });
});

module.exports = router;
