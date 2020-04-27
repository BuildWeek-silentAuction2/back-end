const router = require('express').Router();
const db = require('../seller_auction_model/seller_auction_model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authenticator = require('../auth/auth-middleware.js');
const tokenGen = require('../auth/generate-token');

router.get('/', (req, res) => {
    db.getAllSellers()
        .then(sellers => {
            res.status(200).json({
                data : sellers
            })
        })
        .catch(err => {
            res.status(400).json({
                error : err
            })
        })
})

// router.post('/', (req, res) => {
//     const login = req.body;
//     db.addSeller(login)
//         .then(seller => {
//             //bcyrp here

//             res.status(200).json({
//                 data : seller
//             })
//         })
//         .catch(err => {
//             res.status(400).json({
//                 error : err
//             })
//         })
// });

// // router.put('/:id', (req, res) => {
// //     const { id } = req.params;
// //     const changes = req.body;

router.post('/register', (req, res) => {
    const newSeller = req.body;
    const hash = bcrypt.hashSync(newSeller.password, 11);
    newUser.password = hash;
    db.addSeller(login)
        .then(seller => {
            res.status(200).json({
                data : seller
            })
        })
        .catch(err => {
            res.status(400).json({
                error : err
            })
        })
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.findByUsername(username)
    .then((seller) => {
      if (seller && bcrypt.compareSync(password, seller.password)) {
        const token = tokenGen(seller);
        res.status(200).json({
          message: `Welcome, ${seller.username}!`,
          token
        })
      } else {
        res.status(401).json({
          message: 'Invalid credentials.'
        })
      }
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
// //     db.findById(id)
// //     .then(bid => {
// //       if (bid) {
// //         db.update(changes, id)
// //         .then(updatedSeller => {
// //           res.status(200).json({ 
// //               data :updatedSeller
// //             });
// //         });
// //       } else {
// //         res.status(404).json({ message: 'Could not find seller with given id' });
// //       }
// //     })
//   //   .catch (err => {
//   //     res.status(500).json({ message: 'Failed to update seller' });
//   //   });
//   // });

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
  
//     db.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find seller with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to delete seller' });
//     });
//   });

  

module.exports = router;