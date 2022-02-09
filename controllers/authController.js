const User = require('../models/User');
const jwt = require('jsonwebtoken');

if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({properties}) => {
        errors[properties.paths] = properties.message;
    });
}

return errors;

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'net ninja secret', {
        expiresIn: maxAge
    }




module.exports.signup_get = (req, res) => {
    res.render('signup');
}
module.exports.login_get = (req, res) => {
    res.render('login');
}
module.exports.signup_post = async (req, res) => {
    const { email, password} = req.body;
    
    try {
     const user = await User.create({ email, password});
     const token = createToken(user_id);
     res.cookies('jwt', token, { httpOnly: true, naxAge: maxAge * 1000 });
     res.status(201).json({ user: user._id });
    }
    catch (err) {
        console.log(err);
        res.status(400).send('error, user not created');
    }
}
module.exports.login_post = async (req, res) => {
   const { email, password} = req.body;
    
    console.log(email, password);
    res.send('user login');
}