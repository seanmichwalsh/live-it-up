var router = require('express').Router()
const Event = require('../../models/event.models');

router.get('/', (req, res) => {
    Event.find().then( users => {
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
            message: "A event ID is required to find a event."
        });
    };
    Event.findById(req.params.id).then(event => {
        if (!event) {
            return res.status(404).send({
                message: "Commitee not found with id" + req.params.id
            });
        };
        res.send(event)
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Event not found with username " + req.params.id
            });
        }
        return res.status(500).send({
            message: "There was a problem retrieving Event " + req.params.id
        }); 
    });
});

router.post('/', (req, res) => {
    if (!(req.body.eventName && req.body.committees)) {
        return res.status(400).send({
            message: "All required fields must be present cannot be empty"
        });
    };
    
    const event = new Event({
        eventName: req.body.eventName,
        committees: req.body.committees
    });

    event.save().then(data => {
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
            message: "An ID must be provided to update the Event."
        });
    };

    if (!(req.body.eventName && req.body.committees)) {
        return res.status(400).send({
            message: "All required fields must be present cannot be empty"
        });
    };

    Event.findByIdAndUpdate(req.params.id, {
        eventName: req.body.eventName,
        committees: req.body.committees
    }, {new: true}).then(event => {
        if (!event) {
            return res.status(404).send({
                message: "Event not found with ID " + req.params.id
            })
        };
        res.send(event); 
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Event not found with ID " + req.params.id
            });
        };
    });
});

router.delete('/:id', (req, res) => {
    Event.findByIdAndRemove(req.params.id)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "Event not found with ID " + req.params.id
            });
        }
        res.send({message: "Event deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Event not found with ID " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Event with id " + req.params.id
        });
    });
});


module.exports = router;