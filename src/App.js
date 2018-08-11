import React, { Component } from 'react';
import './App.css';
import NavigationPanel from './components/NavigationPanel.js'
import SearchPanel from './components/SearchPanel.js'
import Map from './components/Map.js'

class App extends Component {
  state = {
    locations: [],
    isMarkerShown: true,
    isDetailsShown: false,
    openLocationID: '',
    mapCenter: { lat: 56.9514, lng: 24.1111 },
    mapZoom: 14


  }

  componentDidMount() {
    this.getLocations()
  }

  // Creating locations array by fetching data from foursquare API
  getLocations = () => {
    fetch('https://api.foursquare.com/v2/venues/search?ll=56.946285,24.105078&intent=browse&radius=2000&categoryId=4bf58dd8d48988d163941735&limit=15&client_id=DNN2KCYLYXI3WC1AOCN2SH5RY2ALMLHO5LNLFEUASSYQWO0F&client_secret=3WGFL1JW4OABW3403BED4ZPYWJM1LDYRL4PAERKADSRLR2FP&v=20180805')
    .then( response => response.json())
    .then (data => data.response.venues.map(place => (
      {
        id: place.id,
        name: place.name,
        lat: place.location.lat,
        lng: place.location.lng,
      }
    ))).then(locations => {
      this.setState({ locations:locations })
    }).catch(err => console.log(err))
  }

  // Show and hide location details (info window); change center of map
  clickDetails = (openLocationID, lat , lng) => {
    if (!this.state.isDetailsShown && this.state.openLocationID === ""){
      this.setState ({
        openLocationID: openLocationID,
        isDetailsShown: true,
        mapCenter: {lat, lng}
      })
    } else if (this.state.isDetailsShown && this.state.openLocationID !== openLocationID){
      this.setState ({
        openLocationID: openLocationID,
        mapCenter: {lat, lng}
      })
    } else {
      this.setState ({
        openLocationID: "",
        isDetailsShown: false,
        mapCenter: {lat: 56.9514, lng: 24.1111}
      })
    }
  }

  // Hide open details if clicking somewhere else in the map
  clickMap = () => {
    this.setState ({
      openLocationID: "",
      isDetailsShown: false
    })
  }


  render() {
    return (
      <div className="App">
        <NavigationPanel/>
        <div className="Map-container">
          <SearchPanel
            locations={this.state.locations}
          />
        <Map
            locations={this.state.locations}
            isMarkerShown={this.state.isMarkerShown}
            isDetailsShown={this.state.isDetailsShown}
            openLocationID={this.state.openLocationID}
            mapCenter={this.state.mapCenter}
            mapZoom={this.state.mapZoom}
            clickDetails={this.clickDetails}
            clickMap={this.clickMap}
          />
        </div>
      </div>
    );
  }
}
export default App;
