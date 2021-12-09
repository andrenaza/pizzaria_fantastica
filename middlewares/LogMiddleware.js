const fs = require ("fs");

module.exports = (req, res, next) => {

    console.log("Passei pelo Logger");
    next();
    fs.writeFileSync("log.txt", "${(new Date()).toISOString()} \n", {flag:"a"});
    console.log("Voltando do Rolê");

}