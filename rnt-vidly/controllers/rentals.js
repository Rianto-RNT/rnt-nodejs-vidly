// const mongoose = require('mongoose');
// const Fawn = require('fawn');

const Rental = require('../models/Rental');
const Movie = require('../models/Movie');
const Customer = require('../models/Customer');

// const validate = require('../middlewares/validator/index');

// mongoose.connect(process.env.MONGO_URI);
// Fawn.init(mongoose);

// @desc    Get All Rental
// @route   GET /api/v1/rentals
// @access  Public
exports.getRentals = async (req, res) => {
  const rentals = await Rental.find().sort('-dateOut');
  res.send(rentals);
};

// @desc    Get Single Movie
// @route   GET /api/v1/rentals
// @access  Public
exports.getRental = async (req, res) => {
  const rental = await Rental.findById(req.params.id);

  if (!rental)
    return res.status(404).send('The rental with the given ID was not found.');

  res.send(rental);
};

// @desc    Create Rental
// @route   POST /api/v1/rentals
// @access  Private/Admin
exports.createRental = async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  if (mongoose.Types.ObjectId.isValid(req.body.customerId))
    return res.status(400).send('Invalid customer.');

  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(400).send('Invalid customer.');

  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(400).send('Invalid movie.');

  if (movie.numberInStock === 0)
    return res.status(400).send('Movie not in stock.');

  let rental = new Rental({
    customer: {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone,
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
    },
  });
  // rental = await rental.save();

  // movie.numberInStock--;
  // movie.save();
  try {
    new Fawn.Task()
      .save('rentals', rental)
      .update(
        'movies',
        { _id: movie._id },
        {
          $inc: { numberInStock: -1 },
        }
      )
      .run();
  } catch (ex) {
    res.status(500).send('Something failed.');
  }

  res.send(rental);
};
