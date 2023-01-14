const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: String,
    email: String,
    role: { type: String, default: 'customer' },
  },
  { timestamps: true }
);

const User = model('User', UserSchema);

module.exports = { User };
