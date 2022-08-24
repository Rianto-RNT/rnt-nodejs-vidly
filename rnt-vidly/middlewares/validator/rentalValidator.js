const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const rentalSchema = Joi.object({
  customerId: Joi.objectId().required(),
  movieId: Joi.objectId().required(),
});

module.exports = rentalSchema;
