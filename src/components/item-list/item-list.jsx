import React from 'react';

const ItemList = (props) => {
  const { onItemSelected, data, children: renderLabel } = props;
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

export default ItemList;
