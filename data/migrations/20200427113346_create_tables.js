
exports.up = function(knex) {
  return knex.schema 
    .createTable('sellers', tbl => {
        tbl.string('id').notNullable().unique().index().primary();
        tbl.string('username').notNullable().unique().index();
        tbl.string('email').notNullable().unique();
        tbl.string('password').notNullable();
    })
    .createTable('buyers', tbl => {
        tbl.string('id').notNullable().unique().index().primary();
        tbl.string('username').notNullable().unique().index();
        tbl.string('email').notNullable().unique();
        tbl.string('password').notNullable();
    })
    .createTable('auctions', tbl => {
        tbl.increments();
        tbl.string('name').unique().notNullable();
        tbl.string('end_time').notNullable();
        tbl.string('seller_id').references('id').inTable('sellers').notNullable().onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('listings', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('image_url');
        tbl.string('description').notNullable();
        tbl.float('starting_price').notNullable();
        tbl.integer('auction_id').references('id').inTable('auctions').notNullable().onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('bids', tbl => {
        tbl.increments();
        tbl.string('time').notNullable();
        tbl.float('amount').notNullable();
        tbl.integer('listing_id').references('id').inTable('listings').notNullable().onUpdate('CASCADE').onDelete('CASCADE');
        tbl.string('bidder_id').references('id').inTable('buyers').notNullable().onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('sellers')
    .dropTableIfExists('buyers')
    .dropTableIfExists('auctions')
    .dropTableIfExists('listings')
    .dropTableIfExists('bids')
};
