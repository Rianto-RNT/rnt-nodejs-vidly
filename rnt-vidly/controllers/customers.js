const Customer = require('../models/Customer');

const validate = require('../middlewares/validator/index');

// @desc    Get All Customer
// @route   GET /api/v1/customer
// @access  Private/Admin
exports.getCustomers = async (req, res) => {
  const customers = await Customer.find({}).sort('name');
  res.status(200).send(customers);
};

// @desc    Get Single Customer
// @route   GET /api/v1/customer
// @access  Private/Admin
exports.getCustomer = async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer)
    return res
      .status(404)
      .send('The customer with the given ID was not found.');

  res.send(customer);
};

// @desc    Create Customer
// @route   POST /api/v1/customer
// @access  Private/Admin
exports.createCustomer = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, phone, isGold } = req.body;
  const customer = new Customer({ name, phone, isGold });
  await customer.save();

  res.send(customer);
};

// @desc    Update Customer
// @route   PUT /api/v1/customer
// @access  Private/Admin
exports.updateCustomer = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, phone, isGold } = req.body;
  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    { name, phone, isGold },
    {
      new: true,
    }
  );

  if (!customer)
    return res
      .status(404)
      .send('The customer with the given ID was not found.');

  res.send(customer);
};

// @desc    Remove Customer
// @route   DELETE /api/v1/customer
// @access  Private/Admin
exports.deleteCustomer = async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer)
    return res
      .status(404)
      .send('The customer with the given ID was not found.');

  res.send(customer);
};
