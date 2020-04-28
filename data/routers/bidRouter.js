const router = require('express').Router();
const db = require('../seller_auction_model/seller_auction_model');

router.get('/', (req, res) => {
    db.getAllBids()
        .then(bid => {
            res.status(200).json({
                data : bid
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
});

router.post('/', (req, res) => {
    const bid_item = req.body;
    db.addBid(bid_item)
        .then(bid => {
            res.status(200).json({
                data : bid
            })
        })
        .catch(err => {
          console.log(err)
            res.status(500).json({
                error : err
            })
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    db.findBidById(id)
    .then(bid => {
      if (bid) {
        db.updateBid(id, changes)
        .then(updatedBid => {
          res.status(200).json({
              data : updatedBid
            });
        });
      } else {
        res.status(404).json({ message: 'Could not find bid with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update bid' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    db.removeBid(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find bid with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete bid' });
    });
  });

module.exports = router;

