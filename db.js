const mongoose = require('mongoose');
const { dotenvConfig } = require('./config');
dotenvConfig;

const connectDb = () => {
  mongoose.set('strictQuery', false);

  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
  var conn = mongoose.connection;
  conn.on('connected', function () {
    console.log('database is connected successfully');
  });
  conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
  });
};

module.exports = { connectDb };

// mongoose.set('strictQuery', false);
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     retryWrites: true,
//     w: 'majority',
//   })
//   .then(() => console.log('DB connection successful !'));
