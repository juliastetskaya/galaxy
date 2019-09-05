import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList, StarshipDetails } from '../sw-component';
import Row from '../row';

const StarshipPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={(
        <StarshipList
          onItemSelected={(itemId) => history.push(itemId)}
        />
      )}
      right={<StarshipDetails itemId={id} />}
    />
  );
};

export default withRouter(StarshipPage);
