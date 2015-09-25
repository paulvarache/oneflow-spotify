# Oneflow Spotify
-------------------
This project contains two parts. The API and the webapp.

## API
---
In the folder api, just run a ```npm install``` and then you can start the
server doing ```node index.js --config=./config/dev.js``` and pipe the stdout into the bunyan cli if you want readable logs.

## WebAPP
---
In the folder wclient, just run a ```bower install```and the deliver the static
file from the `src` folder with for example a python server ```python -m SimpleHTTPServer```
The WebAPP needs some informations about the API (to know where to send the request).
You can change this informations at the bottom of the `index.html` file.
