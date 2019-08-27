import React from 'react';
import ItemView from './item-view';

const ItemDetails = ({ children, item, image }) => {
  const data = (
    <ItemView item={item} image={image}>
      {children}
    </ItemView>
  );

  const content = item ? data : <span className="title-no-person">Select a person from a list</span>;

  return (
    <div className="person-details card">
      {content}
    </div>
  );
};

export default ItemDetails;
