# Neighborhood Map Project

<img src="/app.jpg" alt="Project Screenshot">

## Table of Contents
* [Project Overview](#project-overview)
* [React Components Structure](#react-components-structure)
* [Dependencies](#dependencies)
* [Instructions](#instructions)
* [About the project](#about-the-project)
* [Credits](#credits)
* [License](#license)

## Project Overview
Neighborhood map - final project of the Udacity Front-End Web Developer Nanodegree Program.
This project combines information from the whole Udacity Nanodegree course, such as:

* Responsive interface design
* Asynchronous Data Usage
* Accessibility
* Offline Use
* Building applications using React

Project made with React and bootstraped from [`create-react-app`](https://github.com/facebook/create-react-app).

## React Components Structure
```
<App />

  <NavigationPanel />

  <SearchPanel />

  <Map />
    <LocationDetails />

  <Footer />

```

## Dependencies & used APIs

* React google maps - [`react-google-maps`](https://tomchentw.github.io/react-google-maps/)
* Recompose - [`recompose`](https://github.com/acdlite/recompose)
* Escape RegExp - [`escape-string-regexp`](https://www.npmjs.com/package/escape-string-regexp)
* Fontawesome icons - [`Fontawesome`](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css)
* Google fonts - [`Roboto-font`](https://fonts.google.com/specimen/Roboto)
* Fetched location data and images with [`Foursquare API`](https://developer.foursquare.com/)
* Created map with [`Google maps API`](https://developers.google.com/maps/documentation/javascript/tutorial)

## Instructions

You can run a **[live demo](https://davis626.github.io/FEND-Map-Project/)** deployed with `gh-pages` or follow the steps below:

* download or clone the repository
* `cd` into the project folder
* if you don't have npm installed, navigate to: https://www.npmjs.com/get-npm
* install all project dependencies with `npm install`
* start the development server with `npm start`
* with your server running, visit the site in browser: `http://localhost:3000`

* note - service worker works only in production build

## About the project

Riga is the capital city of Latvia and also my hometown, so for this project I decided to display popular parks near the city center.

Maps diplays 15 markers, representing 15 park locations fetched from Foursquare API. There is also a search panel with all these locations listed. Activate the search panel by pressing the hamburger icon. Search panel has a text input field, that filters both the list and the map markers displayed. Clicking on a marker or a location on the list pops up an info window with details about the selected location including location name, address and image.

## Credits

As this is the final project of the Udacity Front-End Web Developer Nanodegree Program, I would like to thank:

* Udacity and Google for the great opportunity to take part in this programm
* Awesome slack and forum community for always providing solutions to problems.
* Teachers and student leaders for making helpfull study jams and webinars.
* Mentors, project reviewers for always adding advice on how to improve.

Thanks for everything! :)

## License

Copyright © 2018, Dāvis Sermons. Released under Udacity License.
