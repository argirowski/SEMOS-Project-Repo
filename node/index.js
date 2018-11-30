var conf = require("./util/config")

conf.loadConfig();

setTimeout(() => {
    console.log(conf.getConfig().db.host);
    console.log(conf.getConfig().db.port);
    console.log(conf.getConfig().db.username);
    console.log(conf.getConfig().db.password);
}, 1000);

