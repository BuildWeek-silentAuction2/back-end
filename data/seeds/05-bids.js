
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bids').del()
    .then(function () {
      // Inserts seed entries
      return knex('bids').insert([
        {id: 1, amount: 45.00, time: '2020-04-22 16:54:03', listing_id: 3, bidder_id: '4d8eea15-e2d3-4b83-bc0c-a9567fcf65c9'},
        {id: 2, amount: 47.00, time: '2020-04-23 05:06:01', listing_id: 3, bidder_id: '9bffd5d3-b02c-4edd-b0e1-29426dc118f3'},
        {id: 3, amount: 50.00, time: '2020-04-23 05:06:05', listing_id: 3, bidder_id: '4d8eea15-e2d3-4b83-bc0c-a9567fcf65c9'},
        {id: 4, amount: 53.00, time: '2020-04-23 16:42:14', listing_id: 3, bidder_id: '9bffd5d3-b02c-4edd-b0e1-29426dc118f3'},
        {id: 5, amount: 100.00, time: '2020-04-23 17:45:15', listing_id: 2, bidder_id: '41db6f93-df99-40b6-a0ff-fbd1659f3b82'},
        {id: 6, amount: 105.00, time: '2020-04-24 10:20:28', listing_id: 2, bidder_id: '7397f8b3-2b99-4e40-8d64-42ee39b0baf9'},
        {id: 7, amount: 4.50, time: '2020-04-25 17:07:20', listing_id: 4, bidder_id: '4d8eea15-e2d3-4b83-bc0c-a9567fcf65c9'},
        {id: 8, amount: 50.00, time: '2020-04-26 17:23:37', listing_id: 1, bidder_id: '7397f8b3-2b99-4e40-8d64-42ee39b0baf9'},
        {id: 9, amount: 51.00, time: '2020-04-26 18:36:46', listing_id: 1, bidder_id: '41db6f93-df99-40b6-a0ff-fbd1659f3b82'},
        {id: 10, amount: 117.00, time: '2020-04-26 22:03:32', listing_id: 2, bidder_id: '41db6f93-df99-40b6-a0ff-fbd1659f3b82'},
        {id: 11, amount: 20.00, time: '2020-04-27 02:11:45', listing_id: 5, bidder_id: '9bffd5d3-b02c-4edd-b0e1-29426dc118f3'},
        {id: 12, amount: 22.00, time: '2020-04-27 02:12:17', listing_id: 5, bidder_id: '4d8eea15-e2d3-4b83-bc0c-a9567fcf65c9'},
        {id: 13, amount: 25.00, time: '2020-04-27 02:12:24', listing_id: 5, bidder_id: '7397f8b3-2b99-4e40-8d64-42ee39b0baf9'},
        {id: 14, amount: 119.50, time: '2020-04-27 06:58:45', listing_id: 2, bidder_id: '7397f8b3-2b99-4e40-8d64-42ee39b0baf9'},
        {id: 15, amount: 56.00, time: '2020-04-27 09:33:51', listing_id: 1, bidder_id: '9bffd5d3-b02c-4edd-b0e1-29426dc118f3'},
        {id: 16, amount: 28.00, time: '2020-04-27 09:43:29', listing_id: 5, bidder_id: '4d8eea15-e2d3-4b83-bc0c-a9567fcf65c9'},
        {id: 17, amount: 57.00, time: '2020-04-27 09:49:47', listing_id: 1, bidder_id: '41db6f93-df99-40b6-a0ff-fbd1659f3b82'},
        {id: 18, amount: 28.50, time: '2020-04-27 14:48:54', listing_id: 5, bidder_id: '9bffd5d3-b02c-4edd-b0e1-29426dc118f3'},
      ]);
    });
};
