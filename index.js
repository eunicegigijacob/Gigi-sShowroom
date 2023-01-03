import express from 'express';

const app = express();

const port = 8080;

app.set('view engine', ejs);

app.get('/', (req, res) => {
  res.render();
});

app.listen(port, () => {
  console.log(`server running on.. ${port}`);
});
