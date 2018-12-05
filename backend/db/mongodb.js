var mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
}

//mongodb://127.0.0.1:27017/semos1 || mongodb://admin:admin2018@ds113445.mlab.com:13445/semosfinalproject
var init = () => { 
    mongoose.connect('mongodb://127.0.0.1:27017/semos1', options)
    .then((conn) => {
        console.log('Connected to MongoDB.');
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = {
    init
}