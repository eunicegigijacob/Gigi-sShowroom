const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { routemanager } = require('./routes/route');

const app = express();

// register view engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(cookieParser());

app.use(routemanager);

app.use((req, res) => {
  res.render('pages/404page');
});
module.exports = { app };
