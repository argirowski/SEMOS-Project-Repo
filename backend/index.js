var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var fileUpload = require('express-fileupload');

var mongodb = require('./db/mongodb');

var root = require('./handlers/root');
var auth = require('./handlers/auth');
var users = require('./handlers/users');
var cvs = require('./handlers/cvs');
var companies = require('./handlers/companies');
var upload = require('./handlers/upload');

mongodb.init();

var app = express();

app.use(bodyParser.json());

app.use(jwt({
        secret: 'semos_project'
    }).unless({
        path: [
            {url: '/', methods: ['GET']},
            {url: '/auth/login', methods: ['POST']},
            {url: '/users', methods: ['POST']}
        ]
    })
);

app.use(fileUpload({
    limits: {
        fileSize: 1000000 //Bytes = 1MB
    }
}));

// Routes

app.get('/', root);
app.get('/current', users.getCurrentUserById); //For testing purposes.

app.post('/auth/login', auth.login);
app.get('/auth/logout', auth.logout);

app.get('/users/dashboard', users.getCurrentUserById); //User dashboard: consists of search label and results section; edit/delete buttons etc.
app.get('/users', users.getAllUsers);
app.post('/users', users.createUser);
app.get('/users/:id', users.getUserById);
app.delete('/users/:id', users.deleteUserById);
app.put('/users/:id', users.updateUserById);

app.get('/cvs', cvs.getAllCVs);
app.post('/cvs', cvs.createCV);
app.get('/cvs/:id', cvs.getCVById);
app.delete('/cvs/:id', cvs.deleteCVById);
app.put('/cvs/:id', cvs.updateCVById);
app.get('/search/cvs', cvs.getCVByTag);

app.get('/companies', companies.getAllCompanies);
app.post('/companies', companies.createCompany); 
app.get('/companies/:id', companies.getCompanyById);
app.delete('/companies/:id', companies.deleteCompanyById);
app.put('/companies/:id', companies.updateCompanyById);
app.put('/search/companies', companies.getCompanyByTag);

app.post('/upload/profileimage/:id', upload.uploadProfileImage);
app.post('/upload/document/:id', upload.uploadDocument);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token.');
    }
});

app.listen(80);