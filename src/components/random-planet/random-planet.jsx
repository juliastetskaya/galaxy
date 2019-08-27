import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PlanetView from './planet-view';

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 10000,
  }

  static propTypes = {
    updateInterval: PropTypes.number,
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    const { updateInterval } = this.props;
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  }

  onError = () => {
    this.setState({ error: true, loading: false });
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 16) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
