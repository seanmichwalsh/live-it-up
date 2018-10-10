var router = require('express').Router();
const Resource = require('../../models/resource.models');

router.get('/', (req, res) => {
    Resource.returnInstance((err, data) =>  {
        if (data == null) {
            return res.status(500).send({
                message: "There was a problem retrieving the resources. "
            }); 
        } else {
            return res.send(data);
        }
    });
})

router.post('/', (req, res) => {
    if (req.body.header == null || req.body.body == null) {
        return res.status(400).send({
            message: "The body and header is required to POST to the Resources page."
        });
    }
    return Resource.returnInstance((err, data) =>  {
        if (data == null) {
            return res.status(500).send({
                message: ("There was a problem retrieving the resources. " 
                    + err.toString())
            }); 
        } else {
            data.header = req.body.header; 
            data.body = req.body.body;
            data.save((err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({
                        message: "An unexpected error occured"
                    });
                } else {
                    return res.send(data); 
                }
            })
        }
    });
})

router.put('/', (req, res) => {
    if (req.body.header == null || req.body.body == null) {
        return res.status(400).send({
            message: "The body and header is required to POST to the Resources page."
        });
    }
    return Resource.returnInstance((err, data) =>  {
        if (data == null) {
            return res.status(500).send({
                message: ("There was a problem retrieving the resources. " 
                    + err.toString())
            }); 
        } else {
            data.update({
                header: req.body.header,
                body: req.body.body
            });
        }
    });
})


module.exports = router;