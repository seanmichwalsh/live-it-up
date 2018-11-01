router = require('express').Router()
const User = require('../../models/user.models');
const Committee = require('../../models/committee.models');

//Gets all users
router.get('/', (req, res) => {
    User.find().then( users => {
        res.send(users)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving users."
        });
    });
});

//Gets a specific user given an ID
router.get('/:uid', (req, res) => {
    if (!req.params.uid) {
        return res.status(400).send({
            message: "A username is required to find one user"
        });
    };
    User.findOne({ 'uid' : req.params.uid }).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with username " + req.params.uid
            });
        };
        res.send(user);
    }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "User not found with username " + req.params.uid
            });
        }
        return res.status(500).send({
            message: "There was a problem retrieving user " + req.params.uid
        }); 
    });
});

//Posts a new user
router.post('/', (req, res) => {
    if (!(req.body.firstName && req.body.lastName && req.body.email && 
        req.body.uid && req.body.mainCommittee && req.body.onCampus 
        && req.body.activeMember && req.body.committees)) {
        
        // error message needs to indicate which field(s) are missing
        return res.status(400).send({
            message: "All required fields must be present."
        });
    }

    //Checks that the mainCommittee has a valid committee ID
    Committee.count({'_id': req.body.mainCommittee}, (err, count) => {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        }
        if (count <= 0) {
            return res.status(400).send({
                message: "The committee ID " + req.body.mainCommittee + " does not exist."
            });
        }
    })
    
    //Checks that each committee in the committees array has a valid, existing ID
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
    
    if (User.findOne({'uid': req.body.uid}).then(user => {
        if (user) {
            return res.status(400).send({
                message: "A user with this username already exists." + req.body.uid
            });
        } else {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            onCampus: req.body.onCampus,
            phoneNumber: req.body.phoneNumber, 
            email: req.body.email,
            uid: req.body.uid,
            activeMember: req.body.activeMember,
            committees: req.body.committees,
            mainCommittee: req.body.mainCommittee
        })

        user.save().then(data => {
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

//Updates an existing user
router.put('/:uid', (req, res) => {
    if (!req.params.uid) {
        return res.status(400).send({
            message: "A username must be provided to update the user."
        });
    };

    //Checks that main committee has a valid committee ID
    Committee.count({'_id': req.body.mainCommittee}, (err, count) => {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        }
        if (count <= 0) {
            return res.status(400).send({
                message: "The committee ID " + req.body.mainCommittee + " does not exist."
            });
        }
    })
    
    //Checks that each committee in the committees array has a valid, existing ID
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

    User.findOneAndUpdate({uid: req.params.uid}, {
        firstname: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        onCampus: req.body.onCampus,
        phoneNumber: req.body.phoneNumber, 
        activeMember: req.body.activeMember,
        committees: req.body.committees, 
        mainCommittee: req.body.mainCommittee
    }, {new: true}).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found with username " + req.params.uid
            })
        };
        res.send(user); 
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with username " + req.params.uid
            });
        };
    });
});

router.delete('/:uid', (req, res) => {
    User.findOneAndRemove({uid: req.params.uid})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with username " + req.params.uid
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with username " + req.params.uid
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.uid
        });
    });
});

// Login authentication function to grab user credentials from GT CAS authentication
exports.cas_login = (req, res) => {
    let ticket = req.params('ticket');
    if (ticket) {
        cas.validate(ticket, (err, status, gtUsername) => {
            if (err) {
                res.send({error: err});
            } else {
                res.send({status: status, gtUsername: gtUsername});
            }
        });
    } else {
        res.redirect('/');
    }
};

module.exports = router;