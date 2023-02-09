const { User } = require('../models/user.model');

const userServices = {
  createUser: async (newUser) => {
    return await User.create(newUser);
  },
  getUser: async (username) => {
    return await User.find(username);
  },
};

module.exports = { userServices };
