var cv = require('../models/cvs');

var createCV = (req, res) => {
    var cvData = formatDates(req.body);
    console.log(cvData.experience[0].tags);
    var test = [];
    test = cvData.experience[0].tags.split(" ");
    cvData.experience[0].tags = test;
    console.log(cvData);
    cv.addCV(cvData, (err) => {
        if(err){
            return res.status(500).send(err);
        } else {
            return res.send("CV added.");
        }
    });
};

var getAllCVs = (req, res) => {
    cv.getAllCVs((err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    });
};

var getCVById = (req, res) => {
    var id = req.params.id;
    cv.getCVById(id, (err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    })
};

// Not working yet. 
//https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js?fbclid=IwAR1eUAl38Yb5tT3zuBxUl9YwXR2zsGW9RGz4q-Jrk0BLvS6RE8Tx_lAwRC8
var getCVByTag = (req, res) => {
    var tags = [];
    tags = req.query.tags.split(" ");
    console.log(tags);
    cv.getCVByTag(tags, (err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    })
};

var updateCVById = (req, res) => {
    var cvData = formatDates(req.body);
    var id = req.params.id;
    cv.updateCV(id, cvData, (err) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send("CV updated.");
        }
    });
};

var deleteCVById = (req, res) => {
    var id = req.params.id;
    cv.deleteCVById(id, (err) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send("CV deleted.");
        }
    });
};

var formatDates = (cvData) => {
    if(cvData.birth_date != undefined && cvData.birth_date != null){
        cvData.birth_date = new Date(cvData.birth_date);
    }
    if(cvData.education != undefined && cvData.education != null){
        for(var i = 0; i < cvData.education.length; i++){
            if(cvData.education[i].start_at != undefined && cvData.education[i].start_at != null){
                cvData.education[i].start_at = new Date(cvData.education[i].start_at);
            }
            if(cvData.education[i].finish_at != undefined && cvData.education[i].finish_at != null){
                cvData.education[i].finish_at = new Date(cvData.education[i].finish_at);
            }
        }
    }
    if(cvData.experience != undefined && cvData.experience != null){
        for(var i = 0; i < cvData.experience.length; i++){
            if(cvData.experience[i].start_at != undefined && cvData.experience[i].start_at != null){
                cvData.experience[i].start_at = new Date(cvData.experience[i].start_at);
            }
            if(cvData.experience[i].finish_at != undefined && cvData.experience[i].finish_at != null){
                cvData.experience[i].finish_at = new Date(cvData.experience[i].finish_at);
            }
        }
    }
    return cvData;
}

module.exports = {
    createCV,
    getAllCVs,
    getCVById,
    updateCVById,
    deleteCVById,
    getCVByTag
}