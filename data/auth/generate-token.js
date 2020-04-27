const jwt = require('jsonwebtoken');

require('dotenv').config();

const tokenGen = (user) => {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '1h'
    }
    
    return jwt.sign(payload, process.env.AUTH_SECRET, options);
}

module.exports = tokenGen;