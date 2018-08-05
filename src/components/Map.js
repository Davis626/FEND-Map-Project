import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

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
          containerElement={ <div style={{ height: `1000px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
