
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auctions').del()
    .then(function () {
      // Inserts seed entries
      return knex('auctions').insert([
        {id: 1, end_time: '2020-05-25 16:30:00', seller_id: '2d0f7c4c-fd2a-45bf-8fca-035890866996'},
        {id: 2, end_time: '2020-06-13 18:00:00', seller_id: 'dfe87610-8b86-4f71-835f-54b9ebf2b123'}
      ]);
    });
};
