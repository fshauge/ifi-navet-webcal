const express = require('express');
const Api = require('./Api');
const { createCalendar } = require('./calendar');
const { PORT, API_URL, CALENDAR_DATA } = require('./constants');

const app = express();
const api = new Api(API_URL);

app.get('/', async (req, res) => {
  try {
    const result = await api.getEvents(req.query.token);
    const calendar = createCalendar(CALENDAR_DATA, result.events);
    res.end(calendar.toString());
  } catch ({ statusCode, body }) {
    res.status(statusCode);
    res.end(body);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
