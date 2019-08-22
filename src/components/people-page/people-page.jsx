/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';


export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
  }

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  }


  render() {
    const { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name }) => name}
      />
    );

    const personDetails = (
      <PersonDetails personId={selectedPerson} loading={false} />
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
