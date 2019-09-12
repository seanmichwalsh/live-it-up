var router = require('express').Router()
const Event = require('../../models/event.models');
const Committee = require('../../models/committee.models');

//Gets all events
router.get('/', (req, res) => {
    Event.find().then( users => {
        res.send(users)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving users."
        });
    });
});

//Gets a specific event given an ID
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

//Posts a new event
router.post('/', (req, res) => {
    if (!(req.body.eventName && req.body.committees && req.body.startTime
            && req.body.endTime && req.body.location)) {
        return res.status(400).send({
            message: "All required fields must be present and cannot be empty"
        });
    };

    //Checks that each committee in the committees array has a valid, existing ID
    req.body.committees.forEach((item, index, array) => {
        Committee.count({'_id': item}, (err, count) => {
            if (err) {
                res.status(500).send({
                    message: err.message500
                })
            }
            if (count <= 0) {
                return res.status(400).send({
                    message: "The committee ID " + item + " does not exist."
                });
            }
        })
    });

    if (req.body.endTime < req.body.startTime) {
        return res.status(400).send({
            message: "Event endTime of " + req.body.endTime + " must occur after event startTime of " + req.body.startTime
        });
    }
    
    const event = new Event({
        eventName: req.body.eventName,
        committees: req.body.committees,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location,
    });

    event.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    })
});

//Updates an existing event
router.put('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "An ID must be provided to update the Event."
        });
    };

    //Checks that each committee in the committees array has a valid, existing ID
    if (req.body.committees) {
        req.body.committees.forEach((item, index, array) => {
            Committee.count({'_id': item}, (err, count) => {
                if (err) {
                    res.status(500).send({
                        message: err.message
                    })
                }
                if (count <= 0) {
                    return res.status(400).send({
                        message: "The committee ID " + item + " does not exist."
                    });
                }
            })
        });
    }

    var startTimestamp = Date.parse(req.body.startTime);
    if (isNaN(startTimestamp) == true) {
        return res.status(400).send({
            message: "startTime " + req.body.startTime + " is not a valid Date object"
        })
    }

    var endTimeStamp = Date.parse(req.body.endTime);
    if (isNaN(endTimeStamp) == true) {
        return res.status(400).send({
            message: "endTime " + req.body.endTime + " is not a valid Date object"
        })
    }

    var updatedEvent = {}
    if (req.body.eventName) {
        updatedEvent['eventName'] = req.body.eventName
    }
    if (req.body.committees) {
        updatedEvent['committees'] = req.body.committees
    }
    if (req.body.startTime) {
        updatedEvent['startTime'] = req.body.startTime
    }
    if (req.body.endTime) {
        updatedEvent['endTime'] = req.body.endTime
    }
    if (req.body.location) {
        updatedEvent['location'] = req.body.location
    }

    Event.findByIdAndUpdate(req.params.id, updatedEvent, {new: true}).then(event => {
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

//Deletes a specified event
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