import React, { Component } from 'react';

export default class NavigationPanel extends Component {
  render() {
    return (
      <header className="Nav-panel">
        <h1 tabIndex="0">Parks in Riga</h1>
        <button
          className={this.props.isPanelVisible ? "Nav-button searchpanel" : "Nav-button"}
          aria-label={this.props.isPanelVisible ? "Close search panel" : "Open search panel"}
          aside role="Navigation"
          >
          <i className="fa fa-bars fa-4x" onClick={this.props.toggleSearchPanel}/>
        </button>
      </header>
    );
  }
}
