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
      unique: true,
      validate: {
        validator: (v) => {
          const regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          return regex.test(v);
        },
        message: 'must use a valid email address ',
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'customer',
    },
  },
  { timestamps: true }
);

UserSchema.plugin(require('mongoose-bcrypt'));

const User = model('User', UserSchema);

module.exports = { User };
