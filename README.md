# AngularJS RSS Feed Video Podcast Player

## Overview

The goal of this work sample is to create a web app which lets you browse and watch a subset of the CNN Video Podcast catalog.

- The application must read the RSS file for one of the video podcasts available on http://www.cnn.com/services/podcasting/  (scroll to the ”Video Podcasts” section).
- The application must display a list of available episodes for the feed.
- The list must show four episodes, and allow the user to scroll up and down in the list in case more than four episodes are available.
- When the user selects one episode, that episode shall start playing in the video playback area and the episode's description must appear beneath the video playback area


## Prerequisites

### Node.js

- Download and install [Node.js][node-download-url].
- Install the tool dependencies (`npm install`).


### Installing dependencies

The application needs some dependencies, such as Bower, Bootstrap, Angular files, etc.  You can install these by running:

```
npm install
```


### Running the app

- Run `npm start`
- Navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.


## Useful Information

### Usability and Accessibility

This app is fully accessible pressing the `TAB` key and `Ctrl + TAB`, and pressing `ENTER` key for playing the selection or executing the main action available. 
However, by requirements it's also usable using the arrow keys `(Up/Down/Right/Left)` and `ENTER` key. If we have in mind this app represents a podcast player, I decided the following behavior: 

- To focus on the "Playlist menu" anytime that user is located in "Video Playback" area and he presses the `LEFT` Arrow Key
- To focus on the "Video Playback" area anytime that user is located in "Playlist menu" area and he presses the `RIGHT` Arrow Key

### RSS Feed

This app is able to work with different CNN video podcast RSS Feeds with a similar structure. For make this happens, I based on [JSON Developer's Guide for the Google Feed API][json-dev-guide-url].


[node-download-url]: https://nodejs.org/en/download/
[json-dev-guide-url]: https://developers.google.com/feed/v1/jsondevguide