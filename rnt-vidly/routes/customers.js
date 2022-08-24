const express = require('express');
const router = express.Router();

const {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
} = require('../controllers/customers');

const Customer = require('../models/Customer');

router.route('/').get(getCustomers).post(createCustomer);
router
  .route('/:id')
  .get(getCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;
