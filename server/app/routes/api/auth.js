const CAS = require('cas-authentication-gt');
const router = require('express').Router();


let cas = new CAS({
    cas_url: 'https://cas-test.gatech.edu/cas',
    service_url: 'http://live-it-up.scpc.gatech.edu:3001',
    cas_version: 'saml1.1', 
});

router.get('/login', cas.bounce, (req, res) => {
    return res.json({
        'uid': req.session[cas.session_name]
    })
})

module.exports = router; 