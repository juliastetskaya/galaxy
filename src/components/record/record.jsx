import React from 'react';

const Record = ({ label, field, item }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

export default Record;
