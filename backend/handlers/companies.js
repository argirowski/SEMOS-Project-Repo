var validator = require('fastest-validator');

var companies = require('../models/companies');
var validatorSchema = require('../validators/companies');
var v = new validator();

var createCompany = (req, res) => {
    var valid = v.validate(req.body, validatorSchema.companyCreate);
    if(valid === true) {
        var userId = req.user.id;
        var companyData = formatDates(req.body);
            companyData.userId = userId;
        var splitTags = [];
            splitTags = companyData.company_information[0].tags.split(' ');
            companyData.company_information[0].tags = splitTags;
        companies.addCompany(companyData, (err) => {
            if(err){
                return res.status(500).send(err);
            } else {
                return res.send("Company added.");
            }
        });
    } else {
        res.status(400).send(valid);
    }
};

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

var getCompanyByUserId = (req, res) => {
    var id = req.params.id;
    companies.getCompanyByUserId(id, (err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    });
};

var getCompanyByTag = (req, res) => {
    var tags = [];
    tags = req.query.tags.split(' ');
    companies.getCompanyByTag(tags, (err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    });
};

var updateCompanyById = (req, res) => {
    companies.getCompanyByUserId(req.user.id, (err, company) => {
        if (err) {
            return res.send(err);
        } else {
            if (company.userId == req.user.id) {
                var id = req.params.id;
                var companyData = formatDates(req.body);
                    companies.updateCompanyById(id, companyData, (err) => {
                        if(err){
                            res.status(500).send(err)
                        } else {
                            res.status(200).send("Company info updated.");
                        }
                    });
            } else {
                res.status(400).send("Not authorized.");
            }
        }
    });
};

var deleteCompanyById = (req, res) => {
    companies.getCompanyByUserId(req.user.id, (err, company) => {
        if (err) {
            return res.send(err);
        } else {
            if (company.userId == req.user.id) {
                companies.deleteCompanyById(id, (err) => {
                    if(err) {
                        return res.status(500).send(err);
                    } else {
                        return res.send("Company deleted.");
                    }
                });
            } else {
                res.status(400).send("Not authorized.");
            }
        }
    });
};

var formatDates = (companyData) => {
    if(companyData.established != undefined && companyData.established != null){
        companyData.established = new Date(companyData.established);
    } return companyData;
};

module.exports = {
    getAllCompanies,
    getCompanyById,
    createCompany,
    deleteCompanyById,
    updateCompanyById,
    getCompanyByTag,
    getCompanyByUserId
}