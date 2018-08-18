import React, { Component } from 'react';

// Component contains references to Googlemaps & Foursquare

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="Footer"
        aria-label="Footer with references"
        role="contentinfo">
        <h4 tabIndex={0}>
          <span>Project created using </span>
            <a
              href="https://developer.foursquare.com/"
              tabIndex={0}
              aria-label="Link to foursquare API site"
            >
            Foursquare
            </a>
          <span> and </span>
            <a
              href="https://developers.google.com/maps/documentation/javascript/tutorial"
              tabIndex={0}
              aria-label="Link to google API documentation"
            >
            Google maps
            </a>
        </h4>
      </footer>
    );
  }
}
