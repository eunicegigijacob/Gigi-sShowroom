const { User } = require('../models/user.model');
const { userServices } = require('../services/userservice');
const { tokenUtil } = require('./utils/createToken');

const usercontrols = {
  signUp: async (request, response) => {
    const { userName, email, password } = request.body;
    if (userName && email && password) {
      const existingUser = await userServices.findUser(email);
      if (existingUser) {
        return response.status(400).json({
          status: 'Error!',
          data: 'Email exists for another user',
        });
      }
      const newUser = await userServices.createUser({
        userName,
        email,
        password,
      });
      const token = tokenUtil.loginToken(newUser._id);
      response.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 3,
      });

      return response.status(200).json({
        status: 'Successful',
        data: 'Account created',
      });
    } else {
      return response.status(400).json({
        status: 'Error',
        data: 'Request body is empty',
      });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.login(email, password);
    if (user === 'Incorrect password' || user === 'Incorrect email') {
      return res.status(400).json({
        status: 'Error',
        data: user,
      });
    } else {
      const token = tokenUtil.loginToken(user._id);
      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 3,
      });
      return res.status(200).json({
        status: 'Success',
        data: user,
      });
    }
  },
};

module.exports = { usercontrols };
