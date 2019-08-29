import React from 'react';
import { withRouter } from 'react-router-dom';
import { PlanetList } from '../sw-component';

const PlanetPage = ({ history }) => (
  <PlanetList
    onItemSelected={(id) => history.push(id)}
  />
);

export default withRouter(PlanetPage);
