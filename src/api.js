const request = require('request');
const { API_URL } = require('./constants');

const getEvents = token => {
  return new Promise((resolve, reject) => {
    const options = {
      json: true,
      headers: {
        'Cookie': `PLAY_SESSION="${token}"`
      }
    };

    request(`${API_URL}/events`, options, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};

module.exports = {
  getEvents
};
