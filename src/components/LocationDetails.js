import React, { Component } from "react";

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
    .then( response => response.json())
    .then(data => {
        prefix = data.response.photos.items[0].prefix;
        suffix = data.response.photos.items[0].suffix;
        url = `${prefix}160x160${suffix}`;
        this.setState({imageUrl: url,});
      })
    .catch(err => console.log(err))
  }

  render() {
    const { place } = this.props;
    const { imageUrl } = this.state;
    return (
      <div className="Details-info">
        <h3>{place.name}</h3>
        <img src={imageUrl} alt={place.name} />
        <p className="Details-footer">
          {place.address}
        </p>
      </div>
    );
  }
}
