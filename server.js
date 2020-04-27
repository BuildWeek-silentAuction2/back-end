const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const sellerRouter = require('./data/routers/sellerRouter');
const buyerRouter = require('./data/routers/buyerRouter');
const listingRouter = require('./data/routers/listingRouter');
const auctionRouter = require('./data/routers/auctionRouter');
const bidRouter = require('./data/routers/bidRouter');



const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/seller', sellerRouter);
server.use('/api/buyer', buyerRouter);
server.use('/api/auction', auctionRouter);
server.use('/api/bid', bidRouter);
server.use('/api/listing', listingRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message : 'SERVER ROUTE WORKING ON API'
    })
})

module.exports = server;