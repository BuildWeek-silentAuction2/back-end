
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('buyers').del()
    .then(function () {
      // Inserts seed entries
      return knex('buyers').insert([
        {id: '4d8eea15-e2d3-4b83-bc0c-a9567fcf65c9', username: 'testbuyer', email: 'testbuyer@test.com', password: '$2a$12$tgNAEwqXpYK0vUgUouwuTuEc.SOrhlKrTtJLU7tztPjI71ySYJFAW'},
        {id: '9bffd5d3-b02c-4edd-b0e1-29426dc118f3', username: 'testbuyer1', email: 'testbuyer1@test.com', password: '9bffd5d3-b02c-4edd-b0e1-29426dc118f3'},
        {id: '41db6f93-df99-40b6-a0ff-fbd1659f3b82', username: 'testbuyer2', email: 'testbuyer2@test.com', password: '$2a$12$YeGFQHGnxp1k34JnAr3KSu25SQFafzzGTnBtH4dJysquPN8UkVjwi'},
        {id: '7397f8b3-2b99-4e40-8d64-42ee39b0baf9', username: 'testbuyer3', email: 'testbuyer3@test.com', password: '$2a$12$TxihKMDXyUqBC6S54OHqsuly/cLdyd63HG2KPfEvXICtzvbLR4Bry'}
      ]);
    });
};
