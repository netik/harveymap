# harveymap
Collaborative photo posting tool integrated with Google Maps and Firebase.

HarveyMap was built for Odd Salon to allow members to post images of Harvey, our wolpertinger mascot on vacation in various parts of the world.

Maps are provided by the Google Maps API.
The backend for this project uses Google Firebase for a realtime database, file upload, image storage, and retrieval. 
It is written completely in Javascript and runs under node.js

Two environment variables are required to run this project:

# don't check this script in!
export GMAPI_KEY=xxxxx
export FBASEAPI_KEY=xxxxx

GMAPI_KEY is a valid google maps API key for acccessing google maps.
FBASEAPI_KEY is your firebase API key. Don't check these in.

