var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
// var fileUpload = require('express-fileupload');

var mongodb = require('./db/mongodb');

var root = require('./handlers/root');
var auth = require('./handlers/auth');
var recruits = require('./handlers/recruits');
var recruiters = require('./handlers/recruiters');
var cvs = require('./handlers/cvs');

mongodb.init();

var app = express();

app.use(bodyParser.json());

app.use(jwt({
        secret: 'semos_project'
    }).unless({
        path: [
            {url: '/', methods: ['GET']},
            {url: '/auth/login', methods: ['POST']}
        ]
    })
);

// app.use(fileUpload({
//     limits: {
//         fileSize: 50 * 1024 * 1024
//     }
// }));

app.get('/', root);

app.post('/auth/login', auth.login);
app.get('/auth/logout', auth.logout);

// Decide between recruits or applicants for job seekers; recruiters or companies for employers.
app.get('/recruits', recruits.getAllRecruits);
app.get('/recruits/:id', recruits.getRecruitById);
app.post('/recruits', recruits.createRecruit);
app.delete('/recruits/:id', recruits.deleteRecruitById);
app.put('/recruits/:id', recruits.updateRecruitById);

app.get('/cvs', cvs.getAllCVs);
app.get('/cvs/:id', cvs.getCVById);
// // app.get('cvs/:tag', cvs.getCVByTag); 
app.post('/cvs', cvs.createCV);
app.delete('/cvs/:id', cvs.deleteCVById);
app.put('/cvs/:id', cvs.updateCVById);

app.get('/recruiters', recruiters.getAllRecruiters);
app.get('/recruiters/:id', recruiters.getRecruiterById);
app.post('/recruiters', recruiters.createRecruiter);
app.delete('/recruiters/:id', recruiters.deleteRecruiterById);
app.put('/recruiters/:id', recruiters.updateRecruiterById);

// app.post('/upload', upload.uploadFile);
// app.post('/upload/profile', upload.uploadFile);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token.');
    }
});

app.listen(80);