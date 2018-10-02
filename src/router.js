const express = require('express');
const ical = require('ical-generator');
const moment = require('moment');
const { getEvents } = require('./api');

const router = new express.Router();

router.get('/:token', async (req, res) => {
  const { events } = await getEvents(req.params.token);

  const calendar = ical({
    name: 'Navet',
    domain: 'https://ifinavet.no/',
    prodId: {
      company: 'Navet',
      product: 'ifi-navet-webcal',
      language: 'NO'
    },
    events: events && events.map(event => {
      const start = moment(event.date, 'DD.MM.YYYY HH:mm');
      const end = start.clone().add(1, 'h');

      return {
        summary: event.title,
        description: event.teaser,
        start,
        end
      };
    })
  });

  res.end(calendar.toString());
});

module.exports = router;
