const router = require('express').Router();
const db = require('../seller_auction_model/seller_auction_model');

const bcrypt = require('bcryptjs');

const authenticator = require('../auth/auth-middleware.js');
const tokenGen = require('../auth/generate-token');

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

router.post('/register', (req, res) => {
    const newBuyer = req.body;
    const hash = bcrypt.hashSync(newBuyer.password, 12);
    newBuyer.password = hash;
    db.addBuyer(newBuyer)
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

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.findBuyerByUsername(username)
    .then(buyer => {
      console.log(buyer)
      if (buyer && bcrypt.compareSync(password, buyer.password)) {
        const token = tokenGen(buyer);
        res.status(200).json({
          message: `Welcome, ${buyer.username}!`,
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
  
    db.findById(id)
    .then(bid => {
      if (bid) {
        db.update(changes, id)
        .then(updatedBuyer => {
          res.status(200).json({ data : updatedBuyer});
        });
      } else {
        res.status(404).json({ message: 'Could not find buyer with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update buyer' });
    });
  });


router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    db.removeBuyer(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find buyer with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete buyer' });
    });
  });

module.exports = router;