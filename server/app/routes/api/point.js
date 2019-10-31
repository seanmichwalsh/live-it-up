router = require('express').Router()
const Point = require('../../models/point.models')
const User = require('../../models/user.models')

//Gets all points
router.get('/', (req, res) => {
    Point.find().then( points => {
        res.send(points)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving points."
        });
    });
});

//Gets point with a specific ID
router.get('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "A point ID is required to get a given point object"
        })
    }
    Point.findById( req.params.id ).then(point => {
        if (!point) {
            return res.status(404).send({
                message: "No points are attached to the user ID " + req.params.uid
            })
        }
        res.send(point);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "No points are attached to the user ID " + req.params.uid
            })
        }
        return res.status(500).send({
            message: "There was a server error retrieving points with User ID " + req.params.uid
        })
    })
})

//Get a point by UID
router.get('/user/:uid', (req, res) => {
    //Ensures a uid parameter is present
    if (!req.params.uid) {
        return res.status(400).send({
            message: "A user ID is required to get the associated point object"
        })
    }

    // Finds the point with the given uid and sends it
    Point.find({'uid' : req.params.uid}).then(point => {
        res.send(point)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some server error occured retrieving point reports."
        })
    })
})

// Posts a new individual point
router.post('/', (req, res) => {
    if (!(req.body.date && req.body.category && req.body.uid 
        && req.body.semester && req.body.points && req.body.description)) {
            return res.status(400).send({
                message: "All required fields must be present and cannot be empty"
            })
    }

    //Later on, add a check to ensure the category type is valid once we define types

    // Checks that date is a valid date object
    var dateTimeStamp = Date.parse(req.body.date);
    if (isNaN(dateTimeStamp) == true) {
        return res.status(400).send({
            message: "date " + req.body.date + " is not a valid Date object"
        })
    }
    
    const point = new Point({
        date: req.body.date,
        category: req.body.category,
        uid: req.body.uid,
        semester: req.body.semester,
        points: req.body.points,
        description: req.body.description,
    })

    //Checks that the uid is valid and sends new point to MongoDB if so
    User.count({'uid': req.body.uid}, (err, count) => {
        if (err) {
            res.status(500).send({
                message: "Well isn't this a pickle " + err.message
            })
        }
        if (count <= 0) {
            return res.status(400).send({
                message: "The user with ID " + req.body.uid + " does not exist."
            })
        } else {
            point.save().then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
        }
    })
})

// Updates an existing individual point
router.put('/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "An ID is needed to query the point to update"
        })
    }

    // If present, checks that date is a valid date object
    if (req.body.date) {
        var dateTimeStamp = Date.parse(req.body.date);
        if (isNaN(dateTimeStamp) == true) {
            return res.status(400).send({
                message: "date " + req.body.date + " is not a valid Date object"
            })
        }
    }

    // Creates new point to update existing one
    var updatedPoint = {}
    if (req.body.date) {
        updatedPoint['date'] = req.body.date
    }
    if (req.body.category) {
        updatedPoint['category'] = req.body.category
    }
    if (req.body.uid) {
        updatedPoint['uid'] = req.body.uid
    }
    if (req.body.semester) {
        updatedPoint['semester'] = req.body.semester
    }
    if (req.body.points) {
        updatedPoint['points'] = req.body.points
    }
    if (req.body.description) {
        updatedPoint['description'] = req.body.description
    }

    // If present, checks that the uid is of an existing user is valid
    if (req.body.uid) {
        User.countDocuments({'uid': req.body.uid}).then((count) => {
            if (count <= 0) {
                return res.status(400).send({
                    message: "User ID " + req.body.uid + " is not a valid UID"
                })
            } else {
                Point.findByIdAndUpdate(req.params.id, updatedPoint, {new: true}).then(point => {
                    if (!point) {
                        return res.status(404).send({
                            message: "Point not found with ID " + req.params.id
                        })
                    }
                    res.send(point); 
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Point not found with ID " + req.params.id
                        })
                    }
                })
            }
        })
    }
})

//Deletes a specified point
router.delete('/:id', (req, res) => {
    Point.findByIdAndRemove(req.params.id)
    .then(point => {
        if(!point) {
            return res.status(404).send({
                message: "Point not found with ID " + req.params.id
            });
        }
        res.send({message: "Point deleted successfully!"})
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Point not found with ID " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Point with id " + req.params.id
        })
    })
})

module.exports = router