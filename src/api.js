const request = require('request');

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint, options) {
    return new Promise((resolve, reject) => {
      request(
        this.baseUrl + endpoint,
        options,
        (err, res, body) => {
          if (err) {
            reject(err);
          } else {
            resolve(body);
          }
        }
      );
    });
  }

  getEvents(token) {
    return this.get('/events', {
      json: true,
      headers: {
        'Cookie': `PLAY_SESSION="${token}"`
      }
    });
  }
}

module.exports = Api;
