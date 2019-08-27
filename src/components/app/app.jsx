import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
// import PeoplePage from '../people-page';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-component';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedPerson: 1,
    swapiService: new DummySwapiService(),
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

  onChangeService = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService
        ? DummySwapiService : SwapiService;
      return { swapiService: new Service() };
    });
  }

  render() {
    const {
      showRandomPlanet, hasError, selectedPerson, swapiService,
    } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={swapiService}>
        <div className="container">
          <Header changeService={this.onChangeService} />
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
              />
            )}
            right={<PersonDetails itemId={selectedPerson} />}
          />

          <Row
            left={(
              <StarshipList
                onItemSelected={this.onItemSelected}
              />
            )}
            right={<StarshipDetails itemId={5} />}
          />

          <Row
            left={(
              <PlanetList
                onItemSelected={this.onItemSelected}
              />
            )}
            right={<PlanetDetails itemId={3} />}
          />
        </div>
      </SwapiServiceProvider>
    );
  }
}
