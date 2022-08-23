const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model(
  'Customer',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 25,
    },
    phone: {
      type: Number,
      minlength: 2,
      maxlength: 12,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
  })
);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(3).required(),
    phone: Joi.number().min(2),
    isGold: Joi.boolean(),
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
