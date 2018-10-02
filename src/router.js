const express = require('express');
const ical = require('ical-generator');
const moment = require('moment');
const Api = require('./Api');
const { API_URL, CALENDAR_BASE } = require('./constants');

const router = new express.Router();
const api = new Api(API_URL);

const createEvent = event => {
  const { id, title, teaser, companyName, date } = event;
  const description = (teaser && teaser + '\n\n') + `https://ifinavet.no/event/${id}`;
  const start = moment(date, 'DD.MM.YYYY HH:mm');
  const end = start.clone().add(1, 'h');

  return {
    summary: title,
    location: companyName,
    description,
    start,
    end
  };
};

router.get('/', async (req, res) => {
  const { events } = await api.getEvents(req.query.token);

  const calendar = ical({
    ...CALENDAR_BASE,
    events: events && events.map(createEvent)
  });

  res.end(calendar.toString());
});

module.exports = router;
