const express = require('express');
const router = require('./router');
const { PORT } = require('./constants');

const app = express();
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
