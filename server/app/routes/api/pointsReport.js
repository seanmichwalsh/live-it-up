router = require('express').Router()
const Point = require('../../models/point.models')
const User = require("../../models/user.models")

router.get('/:semester', (req, res) => {
    var pointsReport = {}
    Point.find({'semester' : req.params.semester}).then(points => {

        for (var i = 0, len = points.length; i < len; i++) {
            if (!pointsReport.hasOwnProperty(points[i]['uid'])) {
                var pointReport = {}
                pointReport['group1'] = 0
                pointReport['group2'] = 0
                pointReport['group3'] = 0
                pointReport['committeeEvents'] = 0
                pointReport['plc'] = 0
                pointReport['aux'] = 0
                pointReport['officeHours'] = 0
                pointReport['committeeMeetings'] = 0
                pointReport['semester'] = points[i]['semester']
    
                pointsReport[points[i]['uid']] = pointReport

                User.findOne({ uid: points[i]['uid'] }).then(user => {
                    if (!user) {
                        return res.status(404).send({
                            message: "User not found with username " + req.params.uid + " while generating points report."
                        });
                    }
                    pointsReport['firstName'] = user.firstName
                    pointsReport['lastName'] = user.lastName
                    pointsReport['preferredName'] = user.preferredName
                }).catch(err => {
                    res.status(500).send({
                        message: err.message
                    });
                });

            }
            var category = points[i]['category']
            pointsReport[points[i]['uid']][category] += points[i]['points']
        }
        var category = points[i]["category"];
        pointsReport[points[i]["uid"]][category] += points[i]["points"];
      }
      res.send(pointsReport);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some server error occured retrieving point reports."
      });
    });
});

                var pointReport = {}
                pointReport['group1'] = 0
                pointReport['group2'] = 0
                pointReport['group3'] = 0
                pointReport['committeeEvents'] = 0
                pointReport['plc'] = 0
                pointReport['aux'] = 0
                pointReport['officeHours'] = 0
                pointReport['committeeMeetings'] = 0
                pointReport['semester'] = points[i]['semester']
    
                pointsReport[points[i]['uid']] = pointReport

                User.findOne({ uid: points[i]['uid'] }).then(user => {
                    if (!user) {
                        return res.status(404).send({
                            message: "User not found with username " + req.params.uid + " while generating points report."
                        });
                    }
                    pointsReport['firstName'] = user.firstName
                    pointsReport['lastName'] = user.lastName
                    pointsReport['preferredName'] = user.preferredName
                }).catch(err => {
                    res.status(500).send({
                        message: err.message
                    });
                });
            }
            var category = points[i]['category']
            pointsReport[points[i]['uid']][category] += 1
        }
        var category = points[i]["category"];
        pointsReport[points[i]["uid"]][category] += 1;
      }

      res.send(pointsReport);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some server error occured retrieving point reports."
      });
    });
});

module.exports = router;
