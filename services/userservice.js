const { User } = require('../models/user.model');

const userServices = {
  createUser: async (newUser) => {
    return await User.create(newUser);
  },
  findUser: async (email) => {
    return await User.findOne({ email });
  },
};

module.exports = { userServices };
