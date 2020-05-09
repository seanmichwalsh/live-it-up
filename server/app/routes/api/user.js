router = require("express").Router({ mergeParams: true });
const User = require("../../models/user.models");
const Committee = require("../../models/committee.models");
// const email = require('../../helpers/email')
// let casLogin = require('../../helpers/cas.js')

//Gets all users
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving users.",
      });
    });
});

// Returns the active logged-in user
// ****NOTE: This is placeholder until Harry commits GT Login code
router.get("/me/", (req, res) => {
  // User.findOne({ uid: "zkang35" })
  //   .then(user => {
  //     res.send(user.uid);
  //   })
  //   .catch(err => {
  //     return res.status(404).send({
  //       message: "Error retrieving the currently logged in user"
  //     });
  //   });
  res.send({ uid: "seanwalsh" });
});

//Gets a specific user given an ID
router.get("/:uid", (req, res) => {
  if (!req.params.uid) {
    return res.status(400).send({
      message: "A username is required to find one user",
    });
  }
  User.findOne({ uid: req.params.uid })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with username " + req.params.uid,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with username " + req.params.uid,
        });
      }
      return res.status(500).send({
        message: "There was a problem retrieving user " + req.params.uid,
      });
    });
});

//Posts a new user
router.post("/", (req, res) => {
  if (
    !(
      req.body.firstName &&
      req.body.lastName &&
      req.body.email &&
      req.body.uid &&
      req.body.phoneNumber &&
      req.body.mainCommittee &&
      req.body.committees &&
      typeof req.body.isAdmin == "boolean" &&
      typeof req.body.active == "boolean"
    )
  ) {
    // error message needs to indicate which field(s) are missing
    return res.status(400).send({
      message: "All required fields must be present.",
    });
  }

  //Checks that the mainCommittee has a valid committee ID
  Committee.count({ _id: req.body.mainCommittee }, (err, count) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    }
    if (count <= 0) {
      return res.status(400).send({
        message:
          "The committee ID " + req.body.mainCommittee + " does not exist.",
      });
    }
  });

  //Checks that each committee in the committees array has a valid, existing ID
  req.body.committees.forEach((item, index, array) => {
    Committee.count({ _id: item }, (err, count) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      }
      if (count <= 0) {
        return res.status(400).send({
          message: "The committee ID " + item + " does not exist.",
        });
      }
    });
  });

  // Main user post logic
  if (
    User.findOne({ uid: req.body.uid })
      .then((user) => {
        if (user) {
          return res.status(400).send({
            message:
              "A user with this username already exists: " + req.body.uid,
          });
        } else {
          const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            uid: req.body.uid,
            active: req.body.active,
            committees: req.body.committees,
            mainCommittee: req.body.mainCommittee,
            preferredName: req.body.preferredName,
            isAdmin: req.body.isAdmin,
            status: req.body.status,
          });

          user
            .save()
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              res.status(500).send({
                message: err.message,
              });
            });
        }
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Internal server error",
        });
      })
  );
});

//Updates an existing user given an ID
router.put("/:uid", (req, res) => {
  if (!req.params.uid) {
    return res.status(400).send({
      message: "A username must be provided to update the user.",
    });
  }

  //Makes sure you are not updatinga a user ID
  if (req.body.uid) {
    return res.status(400).send({
      message: "A user's GT username cannot be updated",
    });
  }

  //Checks that main committee has a valid committee ID
  Committee.count({ _id: req.body.mainCommittee }, (err, count) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    }
    if (count <= 0) {
      return res.status(400).send({
        message:
          "The committee ID " + req.body.mainCommittee + " does not exist.",
      });
    }
  });

  //Checks that each committee in the committees array has a valid, existing ID
  req.body.committees.forEach((item, index, array) => {
    Committee.count({ _id: item }, (err, count) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      }
      if (count <= 0) {
        return res.status(400).send({
          message: "The committee ID " + item + " does not exist.",
        });
      }
    });
  });
  var updatedUser = {};
  if (req.body.firstName) {
    updatedUser["firstName"] = req.body.firstName;
  }
  if (req.body.lastName) {
    updatedUser["lastName"] = req.body.lastName;
  }
  if (req.body.email) {
    updatedUser["email"] = req.body.email;
  }
  if (req.body.phoneNumber) {
    updatedUser["phoneNumber"] = req.body.phoneNumber;
  }
  if (req.body.mainCommittee) {
    updatedUser["mainCommittee"] = req.body.mainCommittee;
  }
  if (req.body.committees) {
    updatedUser["committees"] = req.body.committees;
  }
  if (req.body.active) {
    updatedUser["active"] = req.body.active;
  }
  if (typeof req.body.isAdmin == "boolean") {
    updatedUser["isAdmin"] = req.body.isAdmin;
  }
  if (req.body.preferredName) {
    updatedUser["preferredName"] = req.body.preferredName;
  } else {
    updatedUser["preferredName"] = null;
  }
  if (typeof req.body.status == "boolean") {
    updatedUser["status"] = req.body.status;
  } else {
    updatedUser["status"] = "active";
  }

  User.findOneAndUpdate({ uid: req.params.uid }, updatedUser, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with username " + req.params.uid,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with username " + req.params.uid,
        });
      }
    });
});

// Deletes a specific user given a user ID
router.delete("/:uid", (req, res) => {
  User.findOneAndRemove({ uid: req.params.uid })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with username " + req.params.uid,
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "User not found with username " + req.params.uid,
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.uid,
      });
    });
});

//Returns a boolean indicating whether a given user is an admin or not
router.get("/isAdmin/:uid", (req, res) => {
  if (!req.params.uid) {
    return res.status(400).send({
      message: "A username is required",
    });
  }

  User.findOne({ uid: req.params.uid })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with username " + req.params.uid,
        });
      }

      adminStatus = {};
      adminStatus["uid"] = req.params.uid;
      adminStatus["isAdmin"] = user.isAdmin;
      res.send(adminStatus);
    })
    .catch((err) => {
      return res.status(404).send({
        message:
          "Error occurred retrieving user " + req.params.uid + ": " + err,
      });
    });
});

// router.get('/email/:uid&:subject&:message', (req, res) => {
//     if (!req.params.uid || !req.params.subject || !req.params.message) {
//         return res.status(400).send({
//             message: "A user ID, subject, and body are required"
//         })
//     }
//     email.main()
//     res.
// })

module.exports = router;
