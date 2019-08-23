import React from 'react';
import ErrorButton from '../error-button';

const ItemView = ({ item, image, children }) => {
  const { name } = item;
  return (
    <>
      <img
        className="person-image"
        alt="person"
        src={image}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => React.cloneElement(child, { item }))}
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};

export default ItemView;
