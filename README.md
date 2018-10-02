# ifi-navet-webcal

Provides a webcal interface for Navet events.

## Usage (remote)

Log in to ifinavet.no and grab the cookie. Use the right side of the PLAY_SESSION cookie (PLAY_SESSION="...") to subscribe to the calendar:

```
webcal://ifi-navet-webcal.herokuapp.com/?token=...
```

## Usage (local)

Start the Express server:

```
$ npm start
```

Subscribe to the calendar:

```
webcal://localhost:3000/?token=...
```

## Progress

- [x] Create the Express server
- [x] Connect to the API
- [x] Generate the webcal
- [x] Deploy to Heroku
