const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.render('pages/index');
});

module.exports = { app };
