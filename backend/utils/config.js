const fs = require('fs');

var conf = null;

loadConfig = () => {
    fs.readFile('config.json', (err, data) => {
        if (err) {
            throw err
        };
        conf = JSON.parse(data);
    });    
}

getConfig = () => {
    return conf;
}

module.exports = {
    loadConfig,
    getConfig
}