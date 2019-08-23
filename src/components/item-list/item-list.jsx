import React from 'react';
import withData from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const ItemList = ({ onItemSelected, renderLabel, data }) => {
  const items = data.map((item) => {
    const label = renderLabel(item);
    const { id } = item;

    return (
      <li
        key={id}
        className="list-group-item"
        role="presentation"
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
