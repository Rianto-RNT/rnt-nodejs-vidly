const Movie = require('../models/Movie');
const Genre = require('../models/Genre');

const validate = require('../middlewares/validator/index');

// @desc    Get All Movie
// @route   GET /api/v1/movies
// @access  Public
exports.getMovies = async (req, res) => {
  const movies = await Genre.find({}).sort('name');
  res.status(200).send(movies);
};

// @desc    Get Single Movie
// @route   GET /api/v1/movies
// @access  Public
exports.getMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');

  res.send(movie);
};

// @desc    Create Movie
// @route   POST /api/v1/movies
// @access  Private/Admin
exports.createMovie = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
  });
  await movie.save();

  res.send(movie);
};

// @desc    Update Movie
// @route   PUT /api/v1/movies
// @access  Private/Admin
exports.updateMovie = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name,
      },
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
    },
    { new: true }
  );

  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');

  res.send(movie);
};

// @desc    Remove Movie
// @route   DELETE /api/v1/movies
// @access  Private/Admin
exports.deleteMovie = async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);

  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');

  res.send(movie);
};
