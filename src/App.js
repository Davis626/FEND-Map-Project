import React, { Component } from 'react';
import './App.css';
import NavigationPanel from './components/NavigationPanel.js';
import SearchPanel from './components/SearchPanel.js';
import Map from './components/Map.js';
import Footer from './components/Footer.js';
import escapeRegExp from 'escape-string-regexp';

class App extends Component {
  state = {
    locations: [],
    searchLocations: [],
    isMarkerShown: true,
    isDetailsShown: false,
    isPanelVisible: false,
    openLocationID: '',
    query: '',

    // Default map settings
    mapCenter: { lat: 56.9475, lng: 24.1093 },
    mapZoom: 14
  }

  componentDidMount() {
    this.getLocations()
  }

  // Creating locations array by fetching data from foursquare API
  getLocations = () => {
    fetch('https://api.foursquare.com/v2/venues/search?ll=56.946285,24.105078&intent=browse&radius=2000&categoryId=4bf58dd8d48988d163941735&limit=15&client_id=DNN2KCYLYXI3WC1AOCN2SH5RY2ALMLHO5LNLFEUASSYQWO0F&client_secret=3WGFL1JW4OABW3403BED4ZPYWJM1LDYRL4PAERKADSRLR2FP&v=20180805')
    .then( response => {
      // Handle errors - display alert message if there is a problem with fetching data
      if (!response.ok) {
        alert("Sorry. An error has occured while loading data from foursquare API. Check the console for more info.")
      }
      // If there is no problem, return json response
      return response.json();
    })
    // Using map - get the id, name, lat, lng and address values for each location from the json response
    .then (data => data.response.venues.map(place => (
      {
        id: place.id,
        name: place.name,
        lat: place.location.lat,
        lng: place.location.lng,
        address: place.location.formattedAddress,
      }
    ))).then(locations => {
      // Store the information for each location & set state for locations and searchLocations arrays
      this.setState({
        locations:locations,
        searchLocations:locations
      })
    }).catch(err => console.log(err))
  }

  // Show and hide location details (info window) & change center of map
  clickDetails = (openLocationID, lat , lng) => {
    // If no info window is open, open new info window & change center of map
    if (!this.state.isDetailsShown && this.state.openLocationID === ""){
      this.setState ({
        openLocationID: openLocationID,
        isDetailsShown: true,
        mapCenter: {lat, lng}
      })
    // If another info window is already open, switch to current info window & change center of map
    } else if (this.state.isDetailsShown && this.state.openLocationID !== openLocationID){
      this.setState ({
        openLocationID: openLocationID,
        mapCenter: {lat, lng}
      })
    // Otherwise close info window & return to default map center
    } else {
      this.setState ({
        openLocationID: "",
        isDetailsShown: false,
        mapCenter: {lat: 56.9475, lng: 24.1093}
      })
    }
  }

  // Hide open details if clicking somewhere else in the map & return to default map center
  clickMap = () => {
    this.setState ({
      openLocationID: "",
      isDetailsShown: false,
      mapCenter: {lat: 56.9475, lng: 24.1093}
    })
  }

  // Toggle visibility of search panel
  toggleSearchPanel = () => {
    if (!this.state.isPanelVisible){
    this.setState ({ isPanelVisible: true })
    } else {
    this.setState ({ isPanelVisible: false })
    }
  }

  // Function for handling search
  handleSearch = query => {
    this.setState ({ query });
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      this.setState({ locations: this.state.searchLocations.filter(place => match.test(place.name)) })
    } else {
      this.setState({ locations: this.state.searchLocations })
    }
  }


  render() {
    return (
      <div className="App">
          <NavigationPanel
            toggleSearchPanel={this.toggleSearchPanel}
            isPanelVisible={this.state.isPanelVisible}
            />
          <SearchPanel
            locations={this.state.locations}
            query={this.state.query}
            clickDetails={this.clickDetails}
            handleSearch={this.handleSearch}
            isPanelVisible={this.state.isPanelVisible}
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
            isPanelVisible={this.state.isPanelVisible}
          />
          <Footer/>
      </div>
    );
  }
}
export default App;
