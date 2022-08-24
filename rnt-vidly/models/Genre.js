const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [5, 'Genre name minimum 5 character length'],
    maxlength: [50, 'Genre name can not more than 50 character length'],
  },
});

module.exports = mongoose.model('Genre', GenreSchema);
