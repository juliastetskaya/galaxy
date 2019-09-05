import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withDataDetails, withSwapiService, compose } from '../hoc-helpers';

const personRecords = [
  <Record label="Gender" field="gender" key="gender" />,
  <Record label="Birth Year" field="birthYear" key="birthYear" />,
  <Record label="Eye Color" field="eyeColor" key="eyeColor" />,
];

const starshipRecords = [
  <Record label="Model" field="model" key="model" />,
  <Record label="Length" field="length" key="length" />,
  <Record label="Cost" field="costInCredits" key="costInCredits" />,
];

const planetRecords = [
  <Record label="Population" field="population" key="population" />,
  <Record label="Rotation Period" field="rotationPeriod" key="rotationPeriod" />,
  <Record label="Diameter" field="diameter" key="diameter" />,
];

const mapPersonDetailsMethodsToProps = (swapiService) => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImage,
});

const mapPlanetDetailsMethodsToProps = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImage,
});

const mapStarshipDetailsMethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage,
});

const PersonDetails = compose(
  withSwapiService(mapPersonDetailsMethodsToProps),
  withDataDetails(personRecords),
)(ItemDetails);

const PlanetDetails = compose(
  withSwapiService(mapPlanetDetailsMethodsToProps),
  withDataDetails(planetRecords),
)(ItemDetails);

const StarshipDetails = compose(
  withSwapiService(mapStarshipDetailsMethodsToProps),
  withDataDetails(starshipRecords),
)(ItemDetails);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
