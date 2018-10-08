const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create scheme
const UserScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = Users = mongoose.model('users', UserScheme);