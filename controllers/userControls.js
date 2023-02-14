const { User } = require('../models/user.model');
const { userServices } = require('../services/userservice');
const { tokenUtil } = require('./utils/createToken');

const usercontrols = {
  signUp: async (request, response) => {
    const { userName, email, password } = request.body;
    if (userName && email && password) {
      const existingUser = await userServices.findUser(email);
      if (existingUser) {
        return response.status(200).json({
          status: 'Successful',
          data: 'Email exists for another user',
        });
      }
      const newUser = await userServices.createUser({
        userName,
        email,
        password,
      });
      const data = {
        name: newUser.userName,
        id: newUser._id,
      };
      return response.status(200).json({
        status: 'Successful',
        data: data,
      });
    } else {
      return response.status(200).json({
        status: 'Error',
        data: 'Request body is empty',
      });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await userServices.findUser(email);
    if (user) {
      user.comparePassword(password, function (err, isMatch) {
        if (err) throw err;
        console.log('.....', isMatch);
        if (isMatch) {
          console.log('istrue o!');
          const token = tokenUtil.loginToken(user._id);
          return res.status(200).json({
            status: 'Success',
            data: token,
          });
        } else {
          console.log('wrong password');
        }
      });
    }
    // console.log('****', await userServices.ConfirmUser(email, password));
  },
};

module.exports = { usercontrols };
