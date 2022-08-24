const Joi = require('joi');

const genreSchema = Joi.object({
  name: Joi.string().min(3).required(),
  phone: Joi.number().min(2),
  isGold: Joi.boolean(),
});

module.exports = genreSchema;
