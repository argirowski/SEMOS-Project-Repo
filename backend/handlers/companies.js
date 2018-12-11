var utils = require('../utils');
var companies = require('../models/companies');
var bcrypt = require('bcryptjs');
var validator = require('fastest-validator');
var validatorSchema = require('../validators/companies');

var getAllCompanies = (req, res) => {
    companies.getAllCompanies((err, data) => {
        if(err){
            res.status(500).send("Internal server error! " + err);
        } else {
            res.send(data);
        }
    });
};

var getCompanyById = (req, res) => {
    var id = req.params.id;
    companies.getCompanyById(id, (err, data) => {
        if(err){
            res.status(404).send("Company not found.");
        } else {
            res.send(data);
        }
    });
};

var createCompany = (req, res) => {
    var userId = req.user.id;
    var companyData = formatDates(req.body);
        companyData.userId = userId;
        console.log(companyData);
    companies.addCompany(companyData, (err) => {
        if(err){
            return res.status(500).send(err);
        } else {
            return res.send("Company added.");
        }
    });
};

var deleteCompanyById = (req, res) => {
    var id = req.params.id;
    companies.deleteCompanyById(id, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(204).send("Company deleted.");
        }
    })
};

var updateCompanyById = (req, res) => {
    var id = req.params.id;
    var companyData = req.body;
    companies.updateCompanyById(id, companyData, (err) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send("Company info updated.");
        }
    });
};

var formatDates = (companyData) => {
    if(companyData.established != undefined && companyData.established != null){
        companyData.established = new Date(companyData.established);
    } return companyData;
}

module.exports = {
    getAllCompanies,
    getCompanyById,
    createCompany,
    deleteCompanyById,
    updateCompanyById
}