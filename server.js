const { app } = require('./app');
const { connectDb } = require('./db');

connectDb();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server running on.. ${port}`);
});
