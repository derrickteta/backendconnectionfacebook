const db = require("./db.config.js");
const Connexion = db.Connexion;

//const Op = db.Sequelize.Op;

// Create and Save a new Connexion
exports.create = (req, res) => {
    // Validate request
    if (req.body.email === "") {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Connexion
    const connexion = {
        email: req.body.email,
        motdepasse: req.body.motdepasse,
    };


    // Save Connexion in the database
    Connexion.create(connexion)
        .then(connexion => {
            res.send(connexion);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Connexion."
            });
        });
};
