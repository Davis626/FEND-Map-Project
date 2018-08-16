import React, { Component } from 'react';

export default class SearchPanel extends Component {
  render() {
    return (
      <div
        {/*Clicking on the hamburger icon changes css class*/}
        className={this.props.isPanelVisible ? 'Search-panel visible' : 'Search-panel'}
        aria-label="Search panel"
        >
        <div >
          <input
            aria-label="Search place by name"
            tabIndex="0"
            className="Search-input"
            type="text"
            placeholder="  Search park..."
            value={this.props.query}
            {/*handleSearch function filters markers depending from the search input text*/}
            onChange={ (event) => { this.props.handleSearch(event.target.value)} }
            />
        </div>
        <div
          className="Search-results"
          aria-label="List of locations"
          >
          {this.props.locations.map( place => {
            return (
                <button
                  {/*Clicking on the hamburger icon changes tabIndex*/}
                  tabIndex={this.props.isPanelVisible ? "0" : "-1"}
                  className="Search-button"
                  key={place.id}
                  onClick={() =>  {this.props.clickDetails(place.id, place.lat, place.lng)}}
                  >
                  {place.name}
                </button>
            )
          }
          )}
        </div>
      </div>
    );
  }
}
