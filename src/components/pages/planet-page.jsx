import React, { Component } from 'react';

import Row from '../row';
import {
  PlanetList,
  PlanetDetails,
} from '../sw-component';


export default class PlanetPage extends Component {
  state = {
    selectedPlanet: null,
  }

  onItemSelected = (id) => {
    this.setState({ selectedPlanet: id });
  };

  render() {
    const { selectedPlanet } = this.state;
    return (
      <Row
        left={(
          <PlanetList
            onItemSelected={this.onItemSelected}
          />
        )}
        right={<PlanetDetails itemId={selectedPlanet} />}
      />
    );
  }
}
