import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  }

  render() {
    const { selectedPerson, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, birthYear, gender }) => `${name} (${gender}, ${birthYear})`}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} loading={false} />
        </div>
      </div>
    );
  }
}
