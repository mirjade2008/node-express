const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password };
}


if (err.message === 'incorrect email') {
    errors.email = 'that email is not registered';
}


if (err.message === 'incorrect password') {
    errors.password = 'that password is incorrect';
}





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
}
    try {
     const user = await User.create({ email, password});
     const token = createToken(user_id);
     res.cookies('jwt', token, { httpOnly: true, naxAge: maxAge * 1000 });
     res.status(201).json({ user: user._id });
    }
    catch (err) {
    const errors = handleErrors(err);
    res.status(400).send.json({ errors });
    }

module.exports.login_post = async (req, res) => {
   const { email, password } = req.body;
    

    try { 
    const user = await User.login(email, password);
    res.status(200).json({ user: user._id })
    res.cookies('jwt', token, { httpOnly: true, naxAge: maxAge * 1000 });
     res.status(201).json({ user: user._id });
}
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}
