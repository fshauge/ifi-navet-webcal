const ical = require('ical-generator');
const moment = require('moment');

const createEvent = event => {
  const { id, title, teaser, companyName, date } = event;
  const description = (teaser && teaser + '\n\n') + `https://ifinavet.no/event/${id}`;
  const start = moment(date, 'DD.MM.YYYY HH:mm');
  const end = start.clone().add(1, 'h');

  return {
    uid: id,
    summary: title,
    location: companyName,
    description,
    start,
    end
  };
};

const createCalendar = (base, events) => {
  return ical({
    ...base,
    events: events && events.map(createEvent)
  });
};

module.exports = {
  createCalendar
};
