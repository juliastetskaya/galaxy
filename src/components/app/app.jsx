import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

import {
  PlanetDetails,
  StarshipDetails,
} from '../sw-component';

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
        <Router>
          <div className="container">
            <Header changeService={this.onChangeService} />
            <RandomPlanet />

            <Route
              path="/"
              render={() => <h2 className="title">Welcome to StarDB!</h2>}
              exact
            />
            <Route path="/people/:id?" component={PeoplePage} exact />
            <Route path="/planets" component={PlanetPage} exact />
            <Route
              path="/planets/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <PlanetDetails itemId={id} />;
              }}
            />
            <Route path="/starships" component={StarshipPage} exact />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails itemId={id} />;
              }}
            />

          </div>
        </Router>

      </SwapiServiceProvider>
    );
  }
}
