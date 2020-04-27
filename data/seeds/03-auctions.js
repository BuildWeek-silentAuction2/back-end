
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auctions').del()
    .then(function () {
      // Inserts seed entries
      return knex('auctions').insert([
        {id: 1, end_time: '2020-05-25 16:30:00', seller_id: 'cb79794e-39eb-4d3c-b301-6d1dffaf2981'},
        {id: 2, end_time: '2020-06-13 18:00:00', seller_id: 'b7cafac8-3ab7-4ae2-ba2a-b32bf1183efe'}
      ]);
    });
};
