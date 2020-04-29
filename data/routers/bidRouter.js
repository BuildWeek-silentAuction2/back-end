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
    if (!bid_item.time.match(/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):([0-5][0-9]:[0-5][0-9])/g)) {
      res.status(400).json({
        message: 'Invalid date'
      })
    }
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
    if (changes.time && !changes.time.match(/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):([0-5][0-9]:[0-5][0-9])/g)) {
      res.status(400).json({
        message: 'Invalid date'
      })
    }
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

