import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import PlanetView from './planet-view';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    planet: {},
    loading: true,
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 16) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {
    const { planet, loading } = this.state;

    const content = loading ? <Spinner /> : <PlanetView planet={planet} />;

    return (
      <div className="random-planet jumbotron rounded">
        {content}
      </div>
    );
  }
}
