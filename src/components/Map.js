import React, { Component } from 'react';
import { compose, withProps } from "recompose"; //Using "recompose" to simplify component - described in https://tomchentw.github.io/react-google-maps/#usage--configuration
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps'; //Using "react-google-maps" components from https://tomchentw.github.io/react-google-maps/


const ProjectMap = compose(
  withProps ({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCdigiQdWVM8WPznyVBAmGuvAFOr7TBjMc&v=3.exp&libraries=geometry,drawing,places",
    containerElement: <div style={{ height: `1000px`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
    loadingElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  )((props) =>
    <GoogleMap
        mapCenter={props.mapCenter}
        mapZoom={props.mapZoom}
      >

      </GoogleMap>
    )

    export default class Map extends Component {

      render() {
        return (
          <section>
            <ProjectMap
              locations={this.props.locations}
              isDetailsShown={this.props.isDetailsShown}
              isMarkerShown={this.props.isMarkerShown}
              openLocationID={this.props.openLocationID}
              zoom={this.props.zoom}
              center={this.props.center}
            />
          </section>
        )
      }
    }
