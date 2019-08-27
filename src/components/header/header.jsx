import React from 'react';

const Header = (props) => {
  const { changeService } = props;
  return (
    <div className="header d-flex">
      <h3>
        <a href="/">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/">People</a>
        </li>
        <li>
          <a href="/">Planets</a>
        </li>
        <li>
          <a href="/">Starships</a>
        </li>
      </ul>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={changeService}
      >
        Change Service
      </button>
    </div>
  );
};

export default Header;
