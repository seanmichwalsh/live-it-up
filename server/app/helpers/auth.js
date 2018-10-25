const jwt = require('jsonwebtoken');
const { User } = require('../models/user.models.js');

const tokenChecker = (req, res, next) => {
    const token = req.header('x-auth');
    
    //Checks if a given token is invalid
    if (!token || token === '' || token === 'undefined') {
        res.status(403).send('invalid');
        return;
    }

    //Parses a valid token
    const data = jwt.decode(token);
    if (data) {
        User.findById(data.uid).then((userData) => {
            if (userData.tokens.indexOf(token) !== -1) {
                req.userInfo = data;
                req.token = token;
                next();
            } else {
                return Promise.reject();
            }
        }).catch((e) => {
            console.log(e);
            res.status(403).send('invalid');
        });
    } else {
        res.status(403).send('invalid');
    }
};

const priviligeChecker = (access, require) => {
    if (access) {
        const length = require.length;
        for (i=0; i < length; i++) {
            if (access[require[i]] === false) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
};

module.exports = { tokenChecker, priviligeChecker };