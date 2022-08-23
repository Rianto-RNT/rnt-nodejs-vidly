const customer = require('./customerValidator');
const genre = require('./genreValidator');
const movie = require('./movieValidator');
const rental = require('./rentalValidator');

module.exports = {
  customer,
  genre,
  movie,
  rental,
};
