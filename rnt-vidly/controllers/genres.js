const Genre = require('../models/Genre');

// @desc    Get All Genre
// @route   GET /api/v1/genres
// @access  Public
exports.getGenres = async (req, res) => {
  const genres = await Genre.find({}).sort('name');
  res.status(200).send(genres);
};

// @desc    Get Single Genre
// @route   GET /api/v1/genres
// @access  Public
exports.getGenre = async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
};

// @desc    Create Genre
// @route   POST /api/v1/genres
// @access  Private/Admin
exports.createGenre = async (req, res) => {
  try {
    const genre = await Genre.create({ name: req.body.name });
    res.status(200).json({ count: data.length, data: genre });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

// @desc    Update Genre
// @route   PUT /api/v1/genres
// @access  Private/Admin
exports.updateGenre = async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true,
    }
  );

  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
};

// @desc    Remove Genre
// @route   DELETE /api/v1/genres
// @access  Private/Admin
exports.deleteGenre = async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
};
