const Joi = require('joi');

const rentalSchema = Joi.object({
  customerId: Joi.string().required(),
  movieId: Joi.string().required(),
});

module.exports = rentalSchema;
