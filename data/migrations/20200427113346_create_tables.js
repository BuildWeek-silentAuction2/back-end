
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
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('sellers')
    .dropTableIfExists('buyers')
};
