const express = require('express');
const router = require('./router');
const app = express();
const { PORT = 3000 } = process.env;

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
