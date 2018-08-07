import React, { Component } from 'react';
import { compose, withProps } from "recompose"; //Using "recompose" to simplify component - described in https://tomchentw.github.io/react-google-maps/#usage--configuration
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps'; //Using "react-google-maps" components from https://tomchentw.github.io/react-google-maps/

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 56.946285, lng: 24.105078 } }
        defaultZoom = { 14 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          loadingElement={<div style={{height: '100%'}}/>}
          containerElement={ <div style={{ height: `1000px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
  );
 }
};

export default Map;
