const ical = require("ical-generator");
const moment = require("moment");

const createEvent = event => {
  const { id, title, teaser, companyName, date } = event;
  const description =
    (teaser && teaser + "\n\n") + `https://ifinavet.no/event/${id}`;
  const start = moment(date, "DD.MM.YYYY HH:mm").subtract(2, "h");
  const end = start.clone().add(1, "h");

  return {
    uid: id,
    summary: title,
    location: companyName,
    description,
    start,
    end
  };
};

const createCalendar = (data, events) => {
  const calendar = ical(data);

  for (const event of events) {
    calendar.createEvent(createEvent(event));
  }

  return calendar;
};

module.exports = {
  createCalendar
};
