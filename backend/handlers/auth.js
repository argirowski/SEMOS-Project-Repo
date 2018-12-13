var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var validator = require('fastest-validator');

var users = require('../models/users');
var validatorSchema = require('../validators/users');
var v = new validator();

var login = (req, res) => {
    var valid = v.validate(req.body, validatorSchema.userLogin);
    if (valid === true) {
        users.getUserByEmail(req.body.email, (err, userData) => {
            if (!userData) {
                return res.status(404).send("No user registered with that email.")
            }
            bcrypt.compare(req.body.password, userData.password)
            .then((valid) => {
                if(valid) {
                    var ud = {
                        id: userData._id,
                        email: userData.email,
                        name: userData.first_name + ' ' + userData.last_name,
                        type: userData.type
                    };
                    var token = jwt.sign(ud, 'semos_project', { expiresIn: "24h" });
                    return res.send(token);
                } else {
                    return res.status(403).send("Unauthorized access.");
                }
            }).catch((err) => {
                return res.status(500).send("Internal server error. " + err);
            })
        });
    } else {
        res.status(400).send(valid);
    }
};

var logout = (req, res) => {
    res.send(req.user);
};

module.exports = {
    login,
    logout
}