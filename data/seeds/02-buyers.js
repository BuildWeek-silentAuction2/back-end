
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('buyers').del()
    .then(function () {
      // Inserts seed entries
      return knex('buyers').insert([
        {id: '8fa29729-6e98-4728-b925-637cd656707a', username: 'testbuyer', email: 'testbuyer@test.com', password: 'testbuyer'},
        {id: 'fa696fba-010e-4210-8799-d8c942d47075', username: 'testbuyer1', email: 'testbuyer1@test.com', password: 'testbuyer1'},
        {id: '55a37f5e-8845-4fbe-88d9-fa424c0ea600', username: 'testbuyer2', email: 'testbuyer2@test.com', password: 'testbuyer2'},
        {id: 'ed58c719-43cc-44e9-a291-67a02cdc0675', username: 'testbuyer3', email: 'testbuyer3@test.com', password: 'testbuyer3'}
      ]);
    });
};
