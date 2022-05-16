module.exports = app => {
    const connexion = require("./connexionctrl.js");
    //const email = require("../controllers/email.js")
    var router = require("express").Router();

    // Create a new Contact
    //app.post('/api/connexion/create', email.email);
    app.post('/connexion', connexion.create);
}