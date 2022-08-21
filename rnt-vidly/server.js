const morgan = require('morgan');
const colors = require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');

const genres = require('./routes/genres');
const customers = require('./routes/customers');

// Load env vars
dotenv.config({ path: './.env' });

const app = express();

// Connect DB Cloud
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Cloud! Connected...'.green.inverse))
  .catch((error) =>
    console.log(`MongoDB Cloud! Failed to connect..., ${error}`.red)
  );

/**   
   // Connect DB Locally
   mongoose
   .connect(process.env.MONGO_LOCAL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Local! Connected...'.green.inverse))
    .catch((error) =>
    console.log(`MongoDB Local! Failed to connect..., ${error}`.red)
    );
*/

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/genres', genres);
app.use('/api/customers', customers);

// SERVER Development
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
