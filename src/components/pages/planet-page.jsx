import React from 'react';
import { withRouter } from 'react-router-dom';
import { PlanetList, PlanetDetails } from '../sw-component';
import Row from '../row';

const PlanetPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={(
        <PlanetList
          onItemSelected={(itemId) => history.push(itemId)}
        />
      )}
      right={<PlanetDetails itemId={id} />}
    />
  );
};

export default withRouter(PlanetPage);
