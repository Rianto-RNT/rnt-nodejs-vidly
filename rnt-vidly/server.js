const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

// Routes
const movies = require('./routes/movies');
const customers = require('./routes/customers');
const genres = require('./routes/genres');
const rentals = require('./routes/rentals');

// Load env vars
dotenv.config({ path: './.env' });

// Connect DB
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Router
app.use('/api/v1/genres', genres);
app.use('/api/v1/customers', customers);
app.use('/api/v1/movies', movies);
app.use('/api/v1/rentals', rentals);

// SERVER
const PORT = process.env.PORT || 3000;
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} node on port ${PORT}`.magenta
  )
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`.red);

  server.close(() => process.exit(1));
});
