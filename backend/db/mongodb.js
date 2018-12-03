var mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
}

var init = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/semoshw', options)
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