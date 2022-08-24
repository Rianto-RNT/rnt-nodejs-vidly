const mongoose = require('mongoose');

// Connect DB: Cloud
// eslint-disable-next-line node/no-unsupported-features/es-syntax
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(
    `MongoDB Cloud Connected: ${conn.connection.host}`.cyan.underline.bold
  );
};

/**   
 // Connect DB: Locally
 const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(
    `MongoDB Local Connected: ${conn.connection.host}`.cyan.underline.bold
  );
};
*/

module.exports = connectDB;
