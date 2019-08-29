import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-component';

const StarshipPage = ({ history }) => (
  <StarshipList
    onItemSelected={(id) => history.push(id)}
  />
);

export default withRouter(StarshipPage);
