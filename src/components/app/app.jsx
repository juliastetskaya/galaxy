import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 5,
  }

  toggleRandomPlanet = () => {
    this.setState((state) => ({ showRandomPlanet: !state.showRandomPlanet }));
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  }

  render() {
    const { selectedPerson, showRandomPlanet } = this.state;

    return (
      <div className="container">
        <Header />
        {showRandomPlanet ? <RandomPlanet /> : null}
        <button
          type="button"
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={selectedPerson} loading={false} />
          </div>
        </div>
      </div>
    );
  }
}
