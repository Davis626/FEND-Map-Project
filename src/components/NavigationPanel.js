import React, { Component } from 'react';

// Component contains the navigation button (hamburger menu) & main heading

// Clicking on the hamburger icon changes css class and aria-label of the button
// Hamburger icon from https://fontawesome.com

export default class NavigationPanel extends Component {
  render() {
    return (
      <header className="Nav-panel">
        <h1 tabIndex="0">Parks in Riga</h1>
        <button
          className={this.props.isPanelVisible ? "Nav-button searchpanel" : "Nav-button"}
          aria-label={this.props.isPanelVisible ? "Close search panel" : "Open search panel"}
          >
          <i className="fa fa-bars fa-4x" onClick={this.props.toggleSearchPanel}/>
        </button>
      </header>
    );
  }
}
