const jwt = require('jsonwebtoken');

require('dotenv').config();

const tokenGen = (user) => {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const secret = process.env.AUTH_SECRET || 'keep it secret';

    const options = {
        expiresIn: '1h'
    };

    console.log(payload)
    
    return jwt.sign(payload, secret, options);
}

module.exports = tokenGen;