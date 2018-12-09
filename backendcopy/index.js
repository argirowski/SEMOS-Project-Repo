var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var fileUpload = require('express-fileupload');
var fs = require('fs');

// var conf = require("./utils/config");

var mongodb = require('./db/mongodb');

var root = require('./handlers/root');
var auth = require('./handlers/auth');
var users = require('./handlers/users');
var companies = require('./handlers/companies');
var cvs = require('./handlers/cvs');
var upload = require('./handlers/upload');

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

app.use(fileUpload({
    limits: {
        fileSize: 50 * 1024 * 1024
    }
}));

app.get('/', root);

app.post('/auth/login', auth.login);
app.get('/auth/logout', auth.logout);

app.get('/users/', users.getAllUsers);
app.get('/users/cvs/:id', cvs.getCVByUserId);
app.post('/users/createuserapplicant', users.createUserApplicant);
app.post('/users/createusercompany', users.createUserCompany);
app.get('/users/:id', users.getUserById);
// app.get('/users/profile/:id', users.getUserById); User profile....
// app.get('/users/dashboard/:id', users.getUserById); User dashboard....
app.delete('/users/:id', users.deleteUserById);
app.put('/users/edit', users.updateUserById);

app.get('/cvs', cvs.getAllCVs);
app.get('/cvs/:id', cvs.getCVById);
app.post('/cvs/:id', cvs.createCV);
app.delete('/cvs/:id', cvs.deleteCVById);
app.put('/cvs/edit', cvs.updateCVById);
app.get('/findcvsbytags', cvs.getCVByTag);

// Route /cvs/findcvsbytags doesn't work. It has to do with validation file. Fix it...
// {
//     "message": "Cast to ObjectId failed for value \"findcvsbytags\" at path \"_id\" for model \"cvs\"",
//     "name": "CastError",
//     "stringValue": "\"findcvsbytags\"",
//     "kind": "ObjectId",
//     "value": "findcvsbytags",
//     "path": "_id"
// }

app.get('/companies', companies.getAllCompanies);
app.get('/companies/:id', companies.getCompanyById);
// app.get('/companies/dashboard/:id', companiess.getCompanyById); Company dashboard...
// app.get('/companies/profile/:id', companiess.getCompanyById); Company profile...
// app.post('/companies', companies.createCompany);
app.delete('/companies/:id', companies.deleteCompanyById);
app.put('/companies/edit', companies.updateCompanyById);

app.post('/users/upload/profileimage/:id', upload.uploadProfileImage);
app.post('/users/upload/document/:id', upload.uploadDocument);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token.');
    }
});

// conf.loadConfig();
// setTimeout(() => {
//     console.log(conf.getConfig().db.host);
//     console.log(conf.getConfig().db.port);
//     console.log(conf.getConfig().db.username);
//     console.log(conf.getConfig().db.password);
// }, 1000);

app.listen(80);