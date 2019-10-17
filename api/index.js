const Api = require("./Api");
const { createCalendar } = require("./calendar");
const { API_URL, CALENDAR_DATA } = require("./constants");

const api = new Api(API_URL);

module.exports = async (req, res) => {
  try {
    const result = await api.getEvents(req.query.token);
    const calendar = createCalendar(CALENDAR_DATA, result.events);
    res.end(calendar.toString());
  } catch ({ statusCode, body }) {
    res.status(statusCode);
    res.end(body);
  }
};
