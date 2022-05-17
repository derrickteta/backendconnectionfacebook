const mongoose = require('mongoose');
const COLLECTIONS = require('./connexionmd.js');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  motdepasse: {
    type: String,
    required: true,
  },
  dateAjout: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model(COLLECTIONS.USERS, UserSchema);

module.exports = User;