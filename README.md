# ifi-navet-webcal

Provides a webcal interface for Navet events.

## Usage

Start the Express server:

```
$ npm start
```

Log in to ifinavet.no and grab the cookie. Use the right side of the PLAY_SESSION cookie (PLAY_SESSION="...") to subscribe to the calendar:

```
webcal://localhost:3000/?token=...
```
