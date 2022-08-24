const Joi = require('joi');

const genreSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

module.exports = genreSchema;
