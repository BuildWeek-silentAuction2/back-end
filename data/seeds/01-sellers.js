exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sellers').del()
    .then(function () {
      // Inserts seed entries
      return knex('sellers').insert([
        { id: 'cb79794e-39eb-4d3c-b301-6d1dffaf2981', username: 'testseller', email: 'testseller@test.com', password: 'testseller' },
        { id: 'b7cafac8-3ab7-4ae2-ba2a-b32bf1183efe', username: 'testseller2', email: 'testseller2test.com', password: 'testseller2' }
      ]);
    });
};