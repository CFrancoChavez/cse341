const express = require('express');
const app = express();
const port = 3000;

const lesson1Routes = require('./routes/lesson1');

app.use('/', lesson1Routes);

app.listen(port, () => {
  console.log(`Sever app listening at http://localhost:${port}`);
});