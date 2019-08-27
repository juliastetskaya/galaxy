import React, { Component } from 'react';

import Row from '../row';
import {
  PersonList,
  PersonDetails,
} from '../sw-component';


export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  }

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;
    return (
      <Row
        left={(
          <PersonList
            onItemSelected={this.onItemSelected}
          />
        )}
        right={<PersonDetails itemId={selectedPerson} />}
      />
    );
  }
}
