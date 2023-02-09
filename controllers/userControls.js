const { userServices } = require('../services/userservice');

const usercontrols = {
  signUp: async (request, response) => {
    const { userName, email, password } = request.body;
    if (userName && email && password) {
      const newUser = await userServices.createUser({
        userName,
        email,
        password,
      });
      return response.status(200).json({
        status: 'Successful',
        data: newUser,
      });
    }
  },

  login: (LoginDetails) => {},
};

module.exports = { usercontrols };
