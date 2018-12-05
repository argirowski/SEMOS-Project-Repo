var utils = require('../utils');
var recruits = require('../models/recruits');
var bcrypt = require('bcryptjs');
var validator = require('fastest-validator');
var validatorSchema = require('../validators/recruits');

var getAllRecruits = (req, res) => {
    recruits.getAllRecruits((err, data) => {
        if(err){
            res.status(500).send("Internal server error! " + err);
        } else {
            res.send(data);
        }
    });
};

var getRecruitById = (req, res) => {
    var id = req.params.id;
    recruits.getRecruitById(id, (err, data) => {
        if(err){
            res.status(404).send("Recruit not found.");
        } else {
            res.send(data);
        }
    });
};

var deleteRecruitById = (req, res) => {
    var id = req.params.id;
    recruits.deleteRecruitById(id, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(204).send("Recruit deleted.");
        }
    })
};

var updateRecruitById = (req, res) => {
    var id = req.params.id;
    var recruitData = req.body;
    recruits.updateRecruitById(id, recruitData, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send("Recruit info updated.");
        }
    });
};

module.exports = {
    getAllRecruits,
    getRecruitById,
    createRecruit,
    deleteRecruitById,
    updateRecruitById
}