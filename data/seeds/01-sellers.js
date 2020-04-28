exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sellers').del()
    .then(function () {
      // Inserts seed entries
      return knex('sellers').insert([
        { id: '2d0f7c4c-fd2a-45bf-8fca-035890866996', username: 'testseller', email: 'testseller@test.com', password: '$2a$11$eFq7XqmzCiI1ieAS8wnVrOkgrf4Ad06xHprLPVAHR3yyuDCSMoxF.' },
        { id: 'dfe87610-8b86-4f71-835f-54b9ebf2b123', username: 'testseller2', email: 'testseller2test.com', password: '$2a$11$COntlPDtVkbv9qir3wA.n.jSFPzG3Uxqx4mM.jgVqUQbZbRQBUvfG' }
      ]);
    });
};