const express = require('express');

const router = express.Router();

const {
  getRentals,
  getRental,
  createRental,
} = require('../controllers/rentals');

router.route('/').get(getRentals).post(createRental);
router.route('/:id').get(getRental);

module.exports = router;
