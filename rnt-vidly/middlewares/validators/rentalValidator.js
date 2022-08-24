const Joi = require('joi');

const rentalSchema = Joi.object({
  customerId: Joi.objectId().required(),
  movieId: Joi.objectId().required(),
});

module.exports = rentalSchema;
