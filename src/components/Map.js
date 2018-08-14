import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps'; //Using "react-google-maps" components from https://tomchentw.github.io/react-google-maps/
import { compose, withProps } from 'recompose'; //Using "recompose" to simplify component - described in https://tomchentw.github.io/react-google-maps/#usage--configuration
import LocationDetails from './LocationDetails.js';

const ProjectMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdigiQdWVM8WPznyVBAmGuvAFOr7TBjMc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: '100%'}}/>,
    containerElement: <div style={{ height: `100%`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    onClick={props.clickMap}
    center = {props.mapCenter}
    zoom = {props.mapZoom}
    options = {{  mapTypeControl: false }}
    >

    {props.isMarkerShown && props.locations.map( place => {
        return (
        <Marker
          animation={props.isDetailsShown && props.openLocationID === place.id ? 1 : -1}
          key={place.id}
          position={{lat: place.lat, lng: place.lng}}
          onClick={() =>  {props.clickDetails(place.id, place.lat, place.lng)}}
          >
          {props.isDetailsShown && props.openLocationID === place.id &&
          <InfoWindow
            className="Location-details"
            key={place.id}
            onCloseClick={() => props.clickDetails(place.id, place.lat, place.lng)}
            >
            <LocationDetails place={place} />
          </InfoWindow>}
        </Marker>
      )}
    )}


  </GoogleMap>
)

export default class Map extends Component {

  render() {
   return(
      <div className={this.props.isPanelVisible ? 'Map-container searchpanel' : 'Map-container'}>
        <ProjectMap
          locations={this.props.locations}
          clickDetails={this.props.clickDetails}
          isDetailsShown={this.props.isDetailsShown}
          isMarkerShown={this.props.isMarkerShown}
          openLocationID={this.props.openLocationID}
          mapZoom={this.props.mapZoom}
          mapCenter={this.props.mapCenter}
          clickMap={this.props.clickMap}
        />
      </div>
    )
  }
}
