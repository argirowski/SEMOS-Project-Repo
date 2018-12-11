var utils = require('../utils');
var users = require('../models/users');
var bcrypt = require('bcryptjs');
var validator = require('fastest-validator');
var validatorSchema = require('../validators/users');

var getAllUsers = (req, res) => {
    users.getAllUsers((err, data) => {
        if(err){
            res.status(500).send("Internal server error! " + err);
        } else {
            res.send(data);
        }
    });
};

var getUserById = (req, res) => {
    var id = req.params.id;
    users.getUserById(id, (err, data) => {
        if(err){
            res.status(404).send("User not found.");
        } else {
            res.send(data);
        }
    });
};

var getUserByType = (req, res) => {
    var userType = req.body.type;
    users.getUserByType(userType, (err, data) => {
        if(err){
            res.status(404).send("User not found.");
        } else {
            res.send(data);
        }
    });
};

var createUserApplicant = (req, res) => {
    let v = new validator();
    var valid = v.validate(req.body, validatorSchema.userCreate);

    if(valid === true) {
        users.getUserByEmail(req.body.email, (err, data) => {
            if (err) {
                return res.send(err);
            } else {
                if (data == null) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        var userData = req.body;
                        userData.password = hash;
                        userData.type = 'applicant';
                        users.createUser(userData, (err) => {
                            if(err) {
                                res.send(err);
                            } else {
                                res.status(201).send("User created.");
                            }
                        });
                    });
                } else {
                    res.status(400).send("User already exists.");
                }
            }
        });
    } else {
        res.status(400).send(valid);
    }
};

var createUserCompany = (req, res) => {
    let v = new validator();
    var valid = v.validate(req.body, validatorSchema.userCreate);

    if(valid === true) {
        users.getUserByEmail(req.body.email, (err, data) => {
            if (err) {
                return res.send(err);
            } else {
                if (data == null) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        var userData = req.body;
                        userData.password = hash;
                        userData.type = 'company';
                        users.createUser(userData, (err) => {
                            if(err) {
                                res.send(err);
                            } else {
                                res.status(201).send("User created.");
                            }
                        });
                    });
                } else {
                    res.status(400).send("User already exists.");
                }
            }
        });
    } else {
        res.status(400).send(valid);
    }
};

var deleteUserById = (req, res) => {
    var id = req.params.id;
    users.deleteUserById(id, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(204).send("User deleted.");
        }
    });
};

var updateUserById = (req, res) => {
    // var id = req.params.id; //used when testing without token
    var id = req.user.uid; //id that is within the token at login.
    var userData = req.body;
    users.updateUserById(id, userData, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send("User info updated.");
        }
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUserApplicant,
    createUserCompany,
    deleteUserById,
    updateUserById,
    getUserByType
}