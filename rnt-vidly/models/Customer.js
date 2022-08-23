const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 25,
  },
  phone: {
    type: Number,
    minlength: 2,
    maxlength: 12,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);
