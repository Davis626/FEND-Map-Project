import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps'; //Using "react-google-maps" components from https://tomchentw.github.io/react-google-maps/
import { compose, withProps, withStateHandlers } from 'recompose' //Using "recompose" to simplify component - described in https://tomchentw.github.io/react-google-maps/#usage--configuration
import { FaTree } from "react-icons/fa"; //Using "react icons" from https://react-icons.netlify.com/#/

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
    defaultCenter = {props.mapCenter}
    defaultZoom = {props.mapZoom}
    options = {{  mapTypeControl: false }} >

  {props.isMarkerShown && props.locations.map( place => {
    return (
    <Marker
      key={place.id}
      position={{lat: place.lat, lng: place.lng}}
      onClick={() =>  {props.clickDetails(place.id, place.lat, place.lng)}}>
      {props.isDetailsShown && props.openLocationID === place.id &&
      <InfoWindow className="Location-details" onCloseClick={() => props.clickDetails(place.id, place.lat, place.lng)}>
        <div>
          <h1>{place.name}</h1>
          <FaTree/>
        </div>
      </InfoWindow>}
    </Marker>
  )}
)}

  </GoogleMap>
)

export default class Map extends Component {

  render() {
   return(
      <div>
        <ProjectMap
          locations={this.props.location}
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
