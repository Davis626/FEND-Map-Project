import React, { Component } from 'react';

export default class SearchPanel extends Component {
  render() {
    return (
      <div className={this.props.isPanelVisible ? 'Search-panel visible' : 'Search-panel'}>
        <div >
          <input
            className="Search-input"
            type="text"
            placeholder="  Search park..."
            value={this.props.query}
            onChange={ (event) => { this.props.handleSearch(event.target.value)} }
            />
        </div>
        <div className="Search-results">
          {this.props.locations.map( place => {
            return (
              <ol
                className="Search-list"
                key={place.id}
                >
                <button className="Search-button"
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
