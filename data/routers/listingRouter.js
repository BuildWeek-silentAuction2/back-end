const router = require('express').Router();
const db = require('../seller_auction_model/seller_auction_model');

router.get('/', (req, res) => {
    db.getAllListings()
        .then(listing => {
            res.status(200).json({
                data : listing
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
});

// router.post('/', (req, res) => {
//     const list_item = req.body;
//     db.addListing(list_item)
//         .then(listing => {
//             res.status(200).json({
//                 data : listing
//             })
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error : err
//             })
//         })
// });

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;
  
//     db.findById(id)
//     .then(listing => {
//       if (listing) {
//         db.update(changes, id)
//         .then(updateListing => {
//           res.status(200).json({
//               data : updatedListing
//             });
//         });
//       } else {
//         res.status(404).json({ message: 'Could not find listing with given id' });
//       }
//     })
//     .catch (err => {
//       res.status(500).json({ message: 'Failed to update listing' });
//     });
//   });

//   router.delete('/:id', (req, res) => {
//     const { id } = req.params;
  
//     db.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find listing with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to delete listing' });
//     });
//   });

module.exports = router;