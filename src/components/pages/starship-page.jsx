import React, { Component } from 'react';

import Row from '../row';
import {
  StarshipList,
  StarshipDetails,
} from '../sw-component';


export default class StarshipPage extends Component {
  state = {
    selectedStarship: null,
  }

  onItemSelected = (id) => {
    this.setState({ selectedStarship: id });
  };

  render() {
    const { selectedStarship } = this.state;
    return (
      <Row
        left={(
          <StarshipList
            onItemSelected={this.onItemSelected}
          />
        )}
        right={<StarshipDetails itemId={selectedStarship} />}
      />
    );
  }
}
