const express = require("express");
const app = express();


const db = require("./db.config.js");

//var corsOptions = {
  //  origin: "*"
//};
// pour l'enregistrement dans la bd
// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and Resync with { force: false }');
});
//app.use(cors(corsOptions));
app.use(bodyParser.json())

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
    res.json({ message: "Welcome backend legion web." });
});