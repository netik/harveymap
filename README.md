# harveymap
Collaborative photo posting tool integrated with Google Maps and Firebase.

HarveyMap was built for Odd Salon to allow members to post images of Harvey, our wolpertinger mascot on vacation in various parts of the world.

Maps are provided by the Google Maps API.
The backend for this project uses Google Firebase for a realtime database, file upload, image storage, and retrieval. 
It is written completely in Javascript and runs under node.js

Two environment variables are required to run this project:

You might want to put them in a "run.sh" script, to run your server, like so:

```
#!/bin/bash

# don't check this script in!
export GMAPI_KEY=xxx
export FBASEAPI_KEY=xxx
DEBUG=harveymap:* npm start
```

GMAPI_KEY is a valid google maps API key for acccessing google maps.
FBASEAPI_KEY is your firebase API key. Don't check these in.

I run this script on Heroku, and just add these environment variables as Heroku config vars.

TODO: Make changes from other users add markers in real time. Firebase supports this but it's not wired up fully yet.
---
John Adams
7/14/2016

