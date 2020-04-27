const db = require('../dbConfig.js');

module.exports = {
    getAllSellers,
    getAllAuctions,
};

function getAllSellers() {
   return db('sellers')
};

function getAllAuctions() {
    return db('auctions')
};
