
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, name: 'Bicycle', image: 'https://i.ibb.co/80kTn2N/bicycle.jpg', description: 'This bicycle has two wheels, and also pedals! Good for someone who wants to get from point A to point B while getting a bit of exercise in. Condition: good.', starting_price: 50.00, auction_id: 1},
        {id: 2, name: 'Camera', image: 'https://i.ibb.co/9nXqtwM/camera.jpg', description: 'This camera is quite good at taking pictures.  It is a Fujifilm and comes with everything that was included in the box. Condition: used.', starting_price: 100.00, auction_id: 1},
        {id: 3, name: 'Guitar', image: 'https://i.ibb.co/59shLRn/guitar.jpg', description: 'This guitar has 6 strings and comes pre-tuned, although by the time it reaches you it\'s most likely going to be out of tune. Comes with an extra set of strings. Condition: like new', starting_price: 45.00, auction_id: 1},
        {id: 4, name: 'Baby Shoes', image: 'https://i.ibb.co/yyZ8gv2/baby-shoes.jpg', description: 'For sale: baby shoes; never worn. The baby came out much larger than expected. Just a real monster of a baby, honestly. Condition: like new.', starting_price: 4.50, auction_id: 2},
        {id: 5, name: 'Quilt', image: 'https://i.ibb.co/ngkrDng/quilt.jpg', description: 'My great-grandmother made this quilt herself in 1942 but I can no longer keep it as my cat is allergic to quilts. Features rare early use of machine stitching. Condition: vintage.', starting_price: 20.00, auction_id: 2}
      ]);
    });
};
