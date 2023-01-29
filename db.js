const mongoose = require('mongoose');
const { dotenvConfig } = require('./config');
dotenvConfig;

const connectDb = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => console.log('Database connected successfully'));
};

module.exports = { connectDb };
