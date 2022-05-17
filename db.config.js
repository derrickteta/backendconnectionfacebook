const mongoose = require('mongoose');
require('dotenv').config();

//const dbName = process.env.DB_NAME;
//const dbUrl = process.env.DB_URL;

module.exports = async function connection() {
  try {
    await mongoose.connect("mongodb+srv://derrick:derrick@cluster0.jmbi0.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "connect",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection db successful');
  } catch (error) {
    console.log(error);
  }
};