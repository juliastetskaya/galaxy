import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
// import PeoplePage from '../people-page';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import Record from '../record';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedPerson: 1,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => ({ showRandomPlanet: !state.showRandomPlanet }));
  };

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  }

  render() {
    const { showRandomPlanet, hasError, selectedPerson } = this.state;
    const {
      getPerson,
      getAllPeople,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const personDetails = (
      <ItemDetails
        getData={getPerson}
        itemId={selectedPerson}
        getImageUrl={getPersonImage}
      >
        <Record label="Gender" field="gender" />
        <Record label="Birth Year" field="birthYear" />
        <Record label="Eye Color" field="eyeColor" />
      </ItemDetails>
    );

    const starShipDetails = (
      <ItemDetails
        getData={getStarship}
        itemId={5}
        getImageUrl={getStarshipImage}
      >
        <Record label="Model" field="model" />
        <Record label="Length" field="length" />
        <Record label="Cost" field="costInCredits" />
      </ItemDetails>
    );

    return (
      <div className="container">
        <Header />
        {showRandomPlanet ? <RandomPlanet /> : null}
        <div className="row mb2 button-row">
          <button
            type="button"
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
        {/* <PeoplePage /> */}
        <ItemList
          onItemSelected={this.onItemSelected}
          getData={getAllPeople}
          renderLabel={({ name }) => name}
        />
        <Row
          left={personDetails}
          right={starShipDetails}
        />
      </div>
    );
  }
}
