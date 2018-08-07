import React, { Component } from 'react';
import './App.css';
import NavigationPanel from './components/NavigationPanel.js'
import SearchPanel from './components/SearchPanel.js'
import Map from './components/Map.js'

class App extends Component {
  state = {
    locations: [],
    showLocations: [],

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
      this.setState({ showLocations: locations, locations:locations})
    }).catch(err => console.log(err))
  }

  render() {
    console.log(this.state.locations)
    const {
      locations,
      showlocations
    } = this.state

    return (
      <div className="App">
        <NavigationPanel/>
        <div className="Map-container">
          <SearchPanel
            locations={locations}
          />
          <Map
            locations={locations}
          />
        </div>
      </div>
    );
  }
}
export default App;
