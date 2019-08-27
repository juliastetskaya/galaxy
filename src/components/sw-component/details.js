import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withDataDetails } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getStarshipImage,
  getPlanetImage,
} = new SwapiService();

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

const PersonDetails = withDataDetails(ItemDetails, getPerson, personRecords, getPersonImage);
const PlanetDetails = withDataDetails(ItemDetails, getPlanet, planetRecords, getPlanetImage);
const StarshipDetails = withDataDetails(ItemDetails, getStarship,
  starshipRecords, getStarshipImage);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
