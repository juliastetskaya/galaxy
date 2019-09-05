import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Router>
          <div className="container">
            <Header changeService={this.onChangeService} />
            <RandomPlanet />

            <Switch>
              <Route
                path="/"
                render={() => <h2 className="title">Welcome to StarDB!</h2>}
                exact
              />
              <Route path="/people/:id?" component={PeoplePage} exact />
              <Route path="/planets/:id?" component={PlanetPage} exact />
              <Route path="/starships/:id?" component={StarshipPage} exact />

              <Route render={() => <h2 className="title">Page not found</h2>} />
            </Switch>
          </div>
        </Router>

      </SwapiServiceProvider>
    );
  }
}
