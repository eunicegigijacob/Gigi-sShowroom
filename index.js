const express = require('express');

const app = express();

const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('admin');
});

app.listen(port, () => {
  console.log(`server running on.. ${port}`);
});
