const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          const regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          return regex.test(v);
        },
        message: 'must use a valid email address ',
      },
    },
    role: {
      type: String,
      default: 'customer',
    },
  },
  { timestamps: true }
);

const User = model('User', UserSchema);

module.exports = { User };
