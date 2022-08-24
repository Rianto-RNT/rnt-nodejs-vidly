const express = require('express');
const router = express.Router();

const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies');

router.route('/').get(getMovies).post(createMovie);
router.route('/:id').get(getMovie).put(updateMovie).delete(deleteMovie);

module.exports = router;
