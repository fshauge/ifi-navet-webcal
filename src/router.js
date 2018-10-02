const express = require('express');
const ical = require('ical-generator');
const moment = require('moment');
const Api = require('./Api');
const { API_URL, CALENDAR } = require('./constants');

const router = new express.Router();
const api = new Api(API_URL);

const createEvent = event => {
  const { title, teaser, companyName, date } = event;
  const start = moment(date, 'DD.MM.YYYY HH:mm');
  const end = start.clone().add(1, 'h');

  return {
    summary: title,
    description: teaser,
    location: companyName,
    start,
    end
  };
};

router.get('/:token', async (req, res) => {
  const { events } = await api.getEvents(req.params.token);

  const calendar = ical({
    ...CALENDAR,
    events: events && events.map(createEvent)
  });

  res.end(calendar.toString());
});

module.exports = router;
