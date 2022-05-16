const env = require('./env.js');

const Sequelize = require('sequelize');
//import mysql2 from 'mysql2';
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.Connexion= require('./connexionmd.js')(sequelize, Sequelize);


module.exports = db;