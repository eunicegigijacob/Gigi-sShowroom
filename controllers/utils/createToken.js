const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const tokenUtil = {
  loginToken: (data) => {
    return jwt.sign({ data }, process.env.SECRETE_KEY, { expiresIn: '3d' });
  },
};

module.exports = { tokenUtil };
