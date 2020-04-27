const router = require('express').Router();
const db = require('../seller_auction_model/seller_auction_model');

router.get('/', (req, res) => {
    db.getAllBuyers()
        .then(buyer => {
            res.status(200).json({
                data : buyer
            })
        })
        .catch(err => {
            res.status(400).json({
                error : err
            })
        })
});

// router.post('/', (req, res) => {
//     const login = req.body;
//     db.addBuyer(login)
//         .then(buyer => {
//             // bcryp here 

//             res.status(200).json({
//                 data : buyer
//             })
//         })
//         .catch(err => {
//             res.status(400).json({
//                 error : err
//             })
//         })
// });

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;
  
//     db.findById(id)
//     .then(bid => {
//       if (bid) {
//         db.update(changes, id)
//         .then(updatedBuyer => {
//           res.status(200).json({ data : updatedBuyer});
//         });
//       } else {
//         res.status(404).json({ message: 'Could not find buyer with given id' });
//       }
//     })
//     .catch (err => {
//       res.status(500).json({ message: 'Failed to update buyer' });
//     });
//   });


// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
  
//     db.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find buyer with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to delete buyer' });
//     });
//   });

module.exports = router;