import React from 'react';
import ItemView from './item-view';

const ItemDetails = ({ children, item, image }) => {
  const data = (
    <ItemView item={item} image={image}>
      {children}
    </ItemView>
  );

  return (
    <div className="person-details card">
      {data}
    </div>
  );
};

export default ItemDetails;
