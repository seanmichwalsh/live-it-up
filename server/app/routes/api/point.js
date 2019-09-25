router = require('express').Router()
const User = require('../../models/user.models')
const Committee = require('../../models/committee.models')

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

//Gets all points for a specific user ID
router.get('/:uid', (req, res) => {
    if (!req.params.uid) {
        return res.status(400).send({
            message: "A username is required to get points by username"
        });
    };
    Point.find({ 'uid' : req.params.uid }).then(points => {
        if (!points) {
            return res.status(404).send({
                message: "No points are attached to the user ID " + req.params.uid
            });
        };
        res.send(points);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "No points are attached to the user ID " + req.params.uid
            });
        }
        return res.status(500).send({
            message: "There was a server error retrieving points with User ID " + req.params.uid
        }); 
    });
});

module.exports = router