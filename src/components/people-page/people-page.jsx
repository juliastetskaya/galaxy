/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';


export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 1,
  }

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  }

  render() {
    const { selectedItem } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name }) => name}
      />
    );

    const itemDetails = (
      <ItemDetails itemId={selectedItem} loading={false} />
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundary>
    );
  }
}
