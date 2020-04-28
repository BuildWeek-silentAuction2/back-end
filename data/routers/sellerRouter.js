const router = require('express').Router();
const db = require('../seller_auction_model/seller_auction_model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authenticator = require('../auth/auth-middleware.js');
const tokenGen = require('../auth/generate-token');

router.get('/', (req, res) => {
  console.log('fsdf')
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

router.post('/register', (req, res) => {
    const newSeller = req.body;
    const hash = bcrypt.hashSync(newSeller.password, 11);
    newSeller.password = hash;
    db.addSeller(newSeller)
        .then(seller => {
            res.status(200).json({
                data : seller
            })
        })
        .catch(err => {
          console.log(err)
            res.status(400).json({
                error : err
            })
        })
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.findSellerByUsername(username)
    .then(seller => {
      console.log(password)
      if (seller && bcrypt.compareSync(password, seller[0].password)) {
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
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error : err
      })
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.findSellerById(id)
    .then(bid => {
      if (bid) {
        db.updateSeller(id, changes)
        .then(seller => {
          res.status(200).json({ 
              data :seller
            });
        })
        .catch(err => {
          res.status(400).json({
            error : "couldnt find id sorry!!"
          })
        });
      } else {
        res.status(404).json({ message: 'Could not find seller with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update seller' });
    });
  });
  

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    db.removeSeller(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find seller with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete seller' });
    });
  });

  

module.exports = router;