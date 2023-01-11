const express = require('express');

const app = express();

//middleware
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('admin');
});

module.exports = { app };
