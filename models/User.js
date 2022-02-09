const mongoose = require('mongoose');
const { install } = require('validator');
const userSchema = new mongoose.Schema ({
const bcrypt = require('bcrypt');


    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
});


userSchema.pre('save', async function (next) {
    const salt = bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


const user = mongoose.model('user', userSchema);

module.exports = user;