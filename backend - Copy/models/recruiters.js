var mongoose = require('mongoose');

var Recruiters = mongoose.model(
    'recruiters', 
    new mongoose.Schema({
        'company_name': String,
        'established': Date,
        'email': String,
        'website': String,
        'type': String,
        'phone': String,
        'location': {
            'country': String,
            'city': String,
            'zip_code': Number,
            'address': String
        },
        'company_information': [
            {
                'industry': String,
                'scope_of_work': String,
                'no_of_employees': Number,
                'expected_hires_per_year': Number,
                'vision': String,
                'portfolio': String
            }
        ],
        'opportunities': {
            'programs_projects': String,
            'HR': String,
            'amenities': String,
            'current_openings': String
        }
   })
);

var addRecruiter = (data, cb) => {
    var recruiter = new Recruiters(data);
    recruiter.save((err, data) => {
        if(err){
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

var getAllRecruiters = (cb) => {
    Recruiters.find({}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getRecruiterById = (id, cb) => {
    Recruiters.findOne({_id: id}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var updateRecruiterById = (id, data, cb) => {
    Recruiters.updateOne({_id: id}, data, (err) => {
        if(err){
            return cb(err)
        } else {
            return cb(null);
        }
    });
};

var deleteRecruiterById = (id, cb) => {
    Recruiters.deleteOne({_id: id}, (err) => {
        if(err){
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

module.exports = {
    addRecruiter,
    getAllRecruiters,
    getRecruiterById,
    updateRecruiterById,
    deleteRecruiterById 
}