var mongoose = require('mongoose');

var Companies = mongoose.model(
    'companies', 
    new mongoose.Schema({
        "company_name": String,
        "established": Date,
        "email": String,
        "website": String,
        "phone": String,
        "userId": String,
        "location": {
            "country": String,
            "city": String,
            "zip_code": Number,
            "address": String
        },
        "company_information": [
            {
                "industry": String,
                "scope_of_work": String,
                "no_of_employees": Number,
                "tags": [String],
                "expected_hires_per_year": Number,
                "vision": String,
                "portfolio": String
            }
        ],
        "opportunities": {
            "programs_projects": String,
            "HR": String,
            "amenities": String,
            "current_openings": String
        }
   })
);

var addCompany = (data, cb) => {
    var company = new Companies(data);
    company.save((err, data) => {
        if(err){
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

var getAllCompanies = (cb) => {
    Companies.find({}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getCompanyById = (id, cb) => {
    Companies.findOne({_id: id}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var updateCompanyById = (id, data, cb) => {
    Companies.updateOne({_id: id}, data, (err) => {
        if(err){
            return cb(err)
        } else {
            return cb(null);
        }
    });
};

var deleteCompanyById = (id, cb) => {
    Companies.deleteOne({_id: id}, (err) => {
        if(err){
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

var getCompanyByTag = (tags, cb) => {
    Companies.find({"company_information": {$in: tags}}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getCompanyByUserId = (id, cb) => {
    Companies.findOne({userId: id}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

module.exports = {
    addCompany,
    getAllCompanies,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getCompanyByTag,
    getCompanyByUserId
}