var mongoose = require('mongoose');

var CVS = mongoose.model(
    'cvs', 
    new mongoose.Schema({
        'first_name': String,
        'last_name': String,
        'birth_date': Date,
        'email': String,
        'phone': String,
        'residence': {
            'country': String,
            'city': String,
            'zip_code': Number,
            'address': String
        },
        'education': [
            {
                'institution': String,
                'level': String,
                'degree': String,
                'start_at': Date,
                'finish_at': Date
            }
        ],
        'experience': [
            {
                'position': String,
                'job_description': String,
                'tags': [String],
                'employer': String,
                'start_at': Date,
                'finish_at': Date
            }
        ],
        'skills': {
            'languages': String,
            'communication_skills': String,
            'organisational_skills': String,
            'digital_skills': String
        },
        'other': {
            'profile_photo': String,
            'attachment': String
        }
   })
);

var addCV = (data, cb) => {
    var cv = new CVS(data);
    cv.save((err, data) => {
        if(err){
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

var getAllCVs = (cb) => {
    CVS.find({}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getCVById = (id, cb) => {
    CVS.findOne({_id: id}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

// Not working yet.
var getCVByTag = (tags, cb) => {
    console.log(tags);
    CVS.find({"experience.tags": {$in: tags}}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var updateCVById = (id, data, cb) => {
    CVS.updateOne({_id: id}, data, (err) => {
        if(err){
            return cb(err)
        } else {
            return cb(null);
        }
    });
};

var deleteCVById = (id, cb) => {
    CVS.deleteOne({_id: id}, (err) => {
        if(err){
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

module.exports = {
    addCV,
    getAllCVs,
    getCVById,
    updateCVById,
    deleteCVById,
    getCVByTag
}