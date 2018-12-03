var utils = require('../utils');
var recruiters = require('../models/recruiters');
var bcrypt = require('bcryptjs');
var validator = require('fastest-validator');
var validatorSchema = require('../validators/recruiters');

var getAllRecruiters = (req, res) => {
    recruiters.getAllRecruiters((err, data) => {
        if(err){
            res.status(500).send("Internal server error! " + err);
        } else {
            res.send(data);
        }
    });
};

var getRecruiterById = (req, res) => {
    var id = req.params.id;
    recruiters.getRecruiterById(id, (err, data) => {
        if(err){
            res.status(404).send("Recruiter not found.");
        } else {
            res.send(data);
        }
    });
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
                        recruiterData.role = 'user';
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

var deleteRecruiterById = (req, res) => {
    var id = req.params.id;
    recruiters.deleteRecruiterById(id, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(204).send("Recruiter deleted.");
        }
    })
};

var updateRecruiterById = (req, res) => {
    var id = req.params.id;
    var recruiterData = req.body;
    recruiters.updateRecruiterById(id, recruiterData, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send("Recruiter info updated.");
        }
    });
};

module.exports = {
    getAllRecruiters,
    getRecruiterById,
    createRecruiter,
    deleteRecruiterById,
    updateRecruiterById
}