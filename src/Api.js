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
        (err, { statusCode }, body) => {
          if (err) {
            reject({ statusCode: 500, body: err });
          } else if (statusCode != 200) {
            reject({ statusCode, body });
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
