var utils = require('../utils');
var recruiters = require('../models/recruiters');
var recruits = require('../models/recruits');
var bcrypt = require('bcryptjs');
var validator = require('fastest-validator');
var validatorSchema = require('../validators/users');

var createRecruit = (req, res) => {
    let v = new validator();
    var valid = v.validate(req.body, validatorSchema.recruitCreate);

    if(valid === true) {
        recruits.getRecruitByEmail(req.body.email, (err, data) => {
            if (err) {
                return res.send(err);
            } else {
                if (data == null) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        var recruitData = req.body;
                        recruitData.password = hash;
                        recruitData.type = 'recruit';
                        recruits.createRecruit(recruitData, (err) => {
                            if(err) {
                                res.send(err);
                            } else {
                                res.status(201).send("Recruit created.");
                            }
                        });
                    });
                } else {
                    res.status(400).send("Recruit already exists.");
                }
            }
        })
    } else {
        res.status(400).send(valid);
    }
};

var createRecruiter = (req, res) => {
    let v = new validator();
    var valid = v.validate(req.body, validatorSchema.recruiterCreate);

    if(valid === true) {
        recruiters.getRecruiterByEmail(req.body.email, (err, data) => {
            if (err) {
                return res.send(err);
            } else {
                if (data == null) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        var recruiterData = req.body;
                        recruiterData.password = hash;
                        recruiterData.type = 'recruiter';
                        recruiters.createRecruiter(recruiterData, (err) => {
                            if(err) {
                                res.send(err);
                            } else {
                                res.status(201).send("Recruiter created.");
                            }
                        });
                    });
                } else {
                    res.status(400).send("Recruiter already exists.");
                }
            }
        })
    } else {
        res.status(400).send(valid);
    }
};
