const express = require('express');
const Api = require('./Api');
const { createCalendar } = require('./calendar');
const { API_URL, CALENDAR_BASE } = require('./constants');

const app = express();
const { PORT = 3000 } = process.env;
const api = new Api(API_URL);

app.get('/', async (req, res) => {
  try {
    const result = await api.getEvents(req.query.token);
    const calendar = createCalendar(CALENDAR_BASE, result.events);
    res.end(calendar.toString());
  } catch ({ statusCode, body }) {
    res.status(statusCode);
    res.end(body);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
