import React, { Component } from 'react';

export default class SearchPanel extends Component {
  render() {
    return (
      <div className="Search-panel" style={{visibility: this.props.visibility}}>
        <div className="Search-input">
          <input
            type="text"
            placeholder="Search park"
            value={this.props.query}
            onChange={ (event) => { this.props.handleSearch(event.target.value)} }
            />
        </div>
        <div className="Search-results">
          {this.props.locations.map( place => {
            return (
              <ol key={place.id}>
                <button
                  key={place.id}
                  onClick={() =>  {this.props.clickDetails(place.id, place.lat, place.lng)}}
                  >
                  {place.name}
                </button>
              </ol>
            )
          }
          )}
        </div>
      </div>
    );
  }
}
