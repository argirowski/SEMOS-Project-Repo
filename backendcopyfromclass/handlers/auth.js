var jwt = require('jsonwebtoken');
var recruits = require('../models/recruits');
var bcrypt = require('bcryptjs');
var validator = require('fastest-validator');
var validatorSchema = require('../validators/recruits');
var v = new validator();

var login = (req, res) => {
    var valid = v.validate(req.body, validatorSchema.recruitLogin);
    if (valid === true) {
        recruits.getRecruitByEmail(req.body.email, (err, recruitData) => {
            bcrypt.compare(req.body.password, recruitData.password)
            .then((valid) => {
                if(valid) {
                    var rd = {
                        id: recruitData._id,
                        email: recruitData.email,
                        name: recruitData.firstname + ' ' + recruitData.lastname,
                        role: recruitData.role
                    };
                    var token = jwt.sign(rd, 'semos_project');
                    return res.send(token);
                } else {
                    return res.status(403).send("Unauthorized access.");
                }
            }).catch((err) => {
                return res.status(500).send("Internal server error." + err);
            })
        });
    } else {
        res.status(400).send(valid);
    }
};

var logout = (req, res) => {
    res.send(req.recruit);
};

module.exports = {
    login,
    logout
}