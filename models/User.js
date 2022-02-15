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


userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
     const auth = await bcrypt.compare(password, user.password) 
    }
    if (auth) {
        return user
        }
    throw Error('incorrect password')
      }
    throw Error('incorrect email')



const user = mongoose.model('user', userSchema);

module.exports = user;