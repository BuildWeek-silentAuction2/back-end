const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({
        message : 'SERVER ROUTE WORKING ON API'
    })
})

module.exports = server;