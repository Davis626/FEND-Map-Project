import React, { Component } from "react";

// Component contains the details of a location, including - location name, photo, address and reference for usinf Foursquare API

export default class LocationDetails extends Component {
  state = {
    imageUrl: []
  }

  componentDidMount() {
    this.getImages();
  }

  // Getting location image URL by fetching data from foursquare API
  getImages = () => {
    let prefix, suffix, url;

    fetch(`https://api.foursquare.com/v2/venues/${this.props.place.id}/photos?limit=1&client_id=DNN2KCYLYXI3WC1AOCN2SH5RY2ALMLHO5LNLFEUASSYQWO0F&client_secret=3WGFL1JW4OABW3403BED4ZPYWJM1LDYRL4PAERKADSRLR2FP&v=20180805`)
    .then( response => {
      // Handle errors - display alert message if there is a problem with fetching data
      if (!response.ok) {
        alert("Sorry. An error has occured while loading data from foursquare API. Check the console for more info.")
      }
      // If there is no problem, return json response
      return response.json();
    })
    // Get one photo URL for each location from the json response
    .then(data => {
        prefix = data.response.photos.items[0].prefix;
        suffix = data.response.photos.items[0].suffix;
        url = `${prefix}160x160${suffix}`;
        this.setState({imageUrl: url,});
      })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="Details-info">
        <h3>{this.props.place.name}</h3>
        <img src={this.state.imageUrl} alt={this.props.place.name} />
        <p className="Details-footer">
          {this.props.place.address}
        </p>
        <p className="Details-reference">
          Location data using Foursquare API
        </p>
      </div>
    );
  }
}
