const express = require("express");
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const connection = require('./db.config.js');

app.use(bodyParser.json())

// connection do mongo database
connection();

// set port, listen for requests
require("./connexionrt.js")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



// parse requests of content-type - application/json
//app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome connexion backend." });
});