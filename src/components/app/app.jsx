import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
// import PeoplePage from '../people-page';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-component';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedPerson: 1,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => ({ showRandomPlanet: !state.showRandomPlanet }));
  };

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  }

  render() {
    const { showRandomPlanet, hasError, selectedPerson } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const personDetails = (
      <PersonDetails
        itemId={selectedPerson}
      />
    );

    const starshipDetails = (
      <StarshipDetails itemId={5} />
    );

    const planetDetails = (
      <PlanetDetails itemId={3} />
    );

    return (
      <div className="container">
        <Header />
        {showRandomPlanet ? <RandomPlanet /> : null}
        <div className="row mb2 button-row">
          <button
            type="button"
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
        {/* <PeoplePage /> */}

        <Row
          left={(
            <PersonList
              onItemSelected={this.onItemSelected}
              renderLabel={({ name }) => name}
            />
          )}
          right={personDetails}
        />

        <Row
          left={(
            <StarshipList
              onItemSelected={this.onItemSelected}
              renderLabel={({ name }) => name}
            />
          )}
          right={starshipDetails}
        />

        <Row
          left={(
            <PlanetList
              onItemSelected={this.onItemSelected}
              renderLabel={({ name }) => name}
            />
          )}
          right={planetDetails}
        />
      </div>
    );
  }
}
