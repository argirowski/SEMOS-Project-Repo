var mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
}

var init = () => {
    mongoose.connect('mongodb://admin:admin2018@ds113445.mlab.com:13445/semosfinalproject', options)
    .then((conn) => {
        console.log('Connected to MongoDB.');
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {
    init
}