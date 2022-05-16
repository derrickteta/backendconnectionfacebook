module.exports = (sequelize, Sequelize) => {
    const Connexion = sequelize.define("connexion", {
        email: {
            type: Sequelize.STRING
        },
        motdepasse: {
            type: Sequelize.STRING
        },
    });

    return Connexion;
};

//connexion ici est le nom de la table dans la base de donnée