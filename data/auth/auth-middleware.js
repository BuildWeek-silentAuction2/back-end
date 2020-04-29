const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.AUTH_SECRET;

    if (token) {
        console.log(`Log 1: ${token}`);
        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                console.error(`Log 2: ${error}`);
                res.status(401).json({
                    message: 'User not authorized!'
                });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        })
    } else {
        res.status(400).json({
            message: 'No credentials provided!'
        })
    }
}