const express = require('express');
const { usercontrols } = require('../controllers/userControls');

const routemanager = express.Router();

routemanager.get('/', (req, res) => {
  res.render('index');
});

routemanager.get('/admin', (req, res) => {
  res.render('pages/admin');
});

routemanager.get('/login', (req, res) => {
  res.render('pages/login');
});

routemanager.get('/signup', (req, res) => {
  res.render('pages/signup');
});

routemanager.post('/signup', usercontrols.signUp);

routemanager.post('/login', usercontrols.login);

module.exports = { routemanager };
