router = require('express').Router()
const Committee = require('../../models/committee.models');

router.get('/', (req, res) => {
    Committee.find().then( users => {
        res.send(users)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving users."
        });
    });
});

router.get('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "A committee ID is required to find a committee."
        });
    };
    Committee.findById(req.params.id).then(committee => {
        if (!committee) {
            return res.status(404).send({
                message: "Commitee not found with id " + req.params.id
            });
        };
        res.send(committee)
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Committee not found with username " + req.params.id
            });
        }
        return res.status(500).send({
            message: "There was a problem retrieving Committee " + req.params.id
        }); 
    });
});

router.post('/', (req, res) => {
    if (!(req.body.name && req.body.type)) {
        return res.status(400).send({
            message: "All required fields must be present cannot be empty"
        });
    };
    //Later on, add a check to ensure the committee type is valid once we define types
    
    const committee = new Committee({
        name: req.body.name,
        type: req.body.type
    });

    committee.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    })
});

router.put('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "An ID must be provided to update the Committee."
        });
    };

    var updatedCommittee = {}
    if (req.body.name) {
        updatedCommittee['name'] = req.body.name
    }
    if (req.body.type) {
        updatedCommittee['type'] = req.body.type
    }
    console.log(updatedCommittee)

    Committee.findByIdAndUpdate(req.params.id, updatedCommittee,
        {new: true}).then(committee => {
        if (!committee) {
            return res.status(404).send({
                message: "Committee not found with ID " + req.params.id
            })
        };
        res.send(committee); 
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Committee not found with ID " + req.params.id
            });
        };
    });
});

router.delete('/:id', (req, res) => {
    Committee.findByIdAndRemove(req.params.id)
    .then(committee => {
        if(!committee) {
            return res.status(404).send({
                message: "Committee not found with ID " + req.params.id
            });
        }
        res.send({message: "Committee deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Committee not found with ID " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Committee with ID " + req.params.id +", server error"
        });
    });
});


module.exports = router;