const mongoose = require('mongoose');
const { dotenvConfig } = require('./config');
dotenvConfig;

const connectDb = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      retryWrites: true,
      w: 'majority',
    })
    .then(() => console.log('DB connection successful !'));
};

module.exports = { connectDb };
