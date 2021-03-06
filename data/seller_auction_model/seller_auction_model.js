const db = require('../dbConfig.js');

module.exports = {
    getAllSellers,
    getAllAuctions,
    getAllBids,
    getAllBuyers,
    getAllListings,
    findBuyerByUsername,
    addAuction,
    addListing,
    addBid,
    addSeller,
    findSellerByUsername,
    updateSeller,
    removeSeller,
    findSellerById,
    findAuctionById,
    addAuction,
    updateAuction,
    removeAuction,
    findBidById,
    removeBid,
    updateBid,
    addBuyer,
    removeBuyer,
    updateListing,
    removeListing,
    findListingById,
    updateBuyer
};

function getAllSellers() {
   return db('sellers')
};

function getAllBuyers() {
    return db('buyers')
}

function getAllAuctions() {
    return db('auctions')
};

function getAllBids() {
    return db('bids')
};

function getAllListings() {
    return db('listings')
};

function addSeller(seller) {
    return db('sellers').insert(seller, 'id')
};

function findBuyerByUsername(username){
    return db('buyers').where({ username }).first()
};

function addAuction (item){
    return db('auctions').insert(item, 'id')
};

function addListing(item) {
    return db('listings').insert(item, 'id')
};

function addBid(item) {
    return db('bids').insert(item, 'id')
};

function findSellerByUsername(username) {
    return db('sellers').where({ username }).first()
};

function findSellerById(id) {
    return db('sellers').where({ id })
};

function updateSeller(id, changes) {
    return db('sellers')
    .where({ id })
    .update(changes)
};

function removeSeller(id) {
    return db('sellers')
    .where({ id })
    .del()
};
 // ================================
function findAuctionById(id) {
    return db('auctions').where({ id })
};

function updateAuction(id, changes) {
    return db('auctions')
    .where({ id })
    .update(changes)
};

function removeAuction(id) {
    return db('auctions')
    .where({ id })
    .del()
};

//=====================

function findBidById(id) {
    return db('bids')
    .where({ id })
};

function updateBid(id, changes) {
    return db('bids')
    .where({ id })
    .update(changes)
};

function removeBid(id) {
    return db('bids')
    .where({id})
    .del()
};

function addBuyer(item) {
    return db('buyers').insert(item, 'id')
};

function removeBuyer(id) {
    return db('buyers').where({id}).del()
};

function updateBuyer(id, changes) {
    return db('buyers')
    .where({ id })
    .update(changes)
}

function updateListing(id, changes) {
    return db('listings')
    .where({ id })
    .update(changes)
};

function removeListing(id) {
    return db('listings').where({ id })
};

function findListingById(id) {
    return db('listings').where({ id })
}