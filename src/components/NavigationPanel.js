import React, { Component } from 'react';

class NavigationPanel extends Component {
  render() {
    return (
      <header className="Nav-panel">
        <h1>Parks in Riga</h1>
        <button className="Nav-button"><i className="fa fa-bars fa-4x"></i></button>
      </header>
    );
  }
}

export default NavigationPanel;
