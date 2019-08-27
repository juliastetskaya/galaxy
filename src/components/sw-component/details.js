import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withDataDetails, withSwapiService } from '../hoc-helpers';

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

const PersonDetails = withSwapiService(
  withDataDetails(ItemDetails, personRecords),
  mapPersonDetailsMethodsToProps,
);

const PlanetDetails = withSwapiService(
  withDataDetails(ItemDetails, planetRecords),
  mapPlanetDetailsMethodsToProps,
);
const StarshipDetails = withSwapiService(
  withDataDetails(ItemDetails, starshipRecords),
  mapStarshipDetailsMethodsToProps,
);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
