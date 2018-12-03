var mongoose = require('mongoose');

var Recruits = mongoose.model(
    'recruits',
    new mongoose.Schema({
        'firstname': String,
        'lastname': String,
        'email': String,
        'password': String,
        'role': String,
        'location': {
            'country': String,
            'city': String,
            'region': String,
            'address': String
        }
    })
);

var getAllRecruits = (cb) => {
    Recruits.find({}, {password: -1}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getRecruitByEmail = (email, cb) => {
    Recruits.findOne({email: email}, {password: 1, role: 1, firstname: 1, lastname: 1, email: 1, location: 1}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getRecruitById = (id, cb) => {
    Recruits.findById(id, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var createRecruit = (recruitData, cb) => {
    let recruit = new Recruits(recruitData);
    recruit.save((err, data) => {           
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

var deleteRecruitById = (id, cb) => {
    Recruits.deleteOne({_id: id}, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

var updateRecruitById = (id, data, cb) => {
    Recruit.updateOne({_id: id}, data, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

module.exports = {
    getAllRecruits,
    getRecruitByEmail,
    getRecruitById,
    createRecruit,
    deleteRecruitById,
    updateRecruitById
}