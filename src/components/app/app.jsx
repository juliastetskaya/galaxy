import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
} from '../pages';

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
  }

  componentDidCatch() {
    this.setState({ hasError: true });
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
      hasError, swapiService,
    } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={swapiService}>
        <div className="container">
          <Header changeService={this.onChangeService} />
          <RandomPlanet />

          <PeoplePage />
          <PlanetPage />
          <StarshipPage />

        </div>
      </SwapiServiceProvider>
    );
  }
}
