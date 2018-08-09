import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps'; //Using "react-google-maps" components from https://tomchentw.github.io/react-google-maps/
import { compose, withProps, withStateHandlers } from 'recompose'
import { FaTree } from "react-icons/fa";

export default class Map extends Component {

   render() {
     const locations = this.props.locations.map(place => {
      const location = {
        position: {
          lat: place.lat,
          lng: place.lng
        },
      }
      return (
      <Marker key={place.id} {...location}>
        <InfoWindow>
          <FaTree/>
        </InfoWindow>
      </Marker>
    )
  })

    const ProjectMap = compose(withStateHandlers(() => ({
      isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () =>
      ({isOpen: !isOpen,})
    }),
    withScriptjs,
    withGoogleMap
    )(props =>
    <GoogleMap
      defaultCenter = { { lat: 56.9514, lng: 24.1111 } }
      defaultZoom = { 14 }
      options = {{  mapTypeControl: false }}
      >
     <Marker onClick={props.onToggleOpen}>
       {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
         <FaTree />
       </InfoWindow>}
     </Marker>
     {props.isMarkerShown && locations } />
   </GoogleMap>
   )

   return(
      <div>
        <ProjectMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdigiQdWVM8WPznyVBAmGuvAFOr7TBjMc&v=3.exp&libraries=geometry,drawing,place"
          loadingElement={<div style={{height: '100%'}}/>}
          containerElement={ <div style={{ height: `1000px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          isMarkerShown
        />
      </div>
    )
  }
}
