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

// How to associate company with user with type company/recruiter?

// var createCompany = (req, res) => {
//     let v = new validator();
//     var valid = v.validate(req.body, validatorSchema.companyCreate);

//     if(valid === true) {
//         companies.getCompanyByEmail(req.body.email, (err, data) => {
//             if (err) {
//                 return res.send(err);
//             } else {
//                 if (data == null) {
//                     bcrypt.hash(req.body.password, 10, (err, hash) => {
//                         var recruiterData = req.body;
//                         recruiterData.password = hash;
//                         recruiterData.role = 'user';
//                         recruiters.createRecruiter(recruiterData, (err) => {
//                             if(err) {
//                                 res.send(err);
//                             } else {
//                                 res.status(201).send("Recruiter created.");
//                             }
//                         });
//                     });
//                 } else {
//                     res.status(400).send("Recruiter already exists.");
//                 }
//             }
//         })
//     } else {
//         res.status(400).send(valid);
//     }
// };

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

module.exports = {
    getAllCompanies,
    getCompanyById,
    deleteCompanyById,
    updateCompanyById
}