const router = require('express').Router();
const db = require('../seller_auction_model/seller_auction_model');

router.get('/', (req, res) => {
    db.getAllAuctions()
        .then(auctions => {
            res.status(200).json({
                data : auctions
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
});

router.post('/', (req, res) => {
    const item = req.body;
    db.addAuction(item)
        .then(auction => {
            res.status(200).json({
                data : auction
            })
        })
        .catch(err => {
          console.log(err)
            res.status(400).json({
                error : err
            })
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.findAuctionById(id)
    .then(auction => {
      
      if (auction) {
        db.updateAuction(id, changes)
        .then(updatedAuction => {
          console.log(updatedAuction)
          res.status(200).json({
              data : updatedAuction
            });
        })
        .catch(err => {
          res.status(400).json({
            error : 'Couldnt change records'
          })
        });
      } else {
        res.status(404).json({ message: 'Could not find auction with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update auction' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    db.removeAuction(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find auction with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete auction' });
    });
  });

module.exports = router;