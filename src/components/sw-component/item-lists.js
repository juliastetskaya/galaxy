import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (func) => (Wrapped) => (props) => (
  <Wrapped {...props}>
    {func}
  </Wrapped>
);

const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPeople,
});

const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets,
});

const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships,
});

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(
    withChildFunction(renderName)(
      ItemList,
    ),
  ),
);


const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(
    withChildFunction(renderName)(
      ItemList,
    ),
  ),
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(
    withChildFunction(renderName)(
      ItemList,
    ),
  ),
);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
