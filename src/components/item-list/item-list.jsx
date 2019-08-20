import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

// eslint-disable-next-line react/prefer-stateless-function
export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => this.setState({ peopleList }));
  }

  render() {
    const { peopleList } = this.state;
    const { onPersonSelected } = this.props;

    const renderPeopleList = (people) => people.map(({ id, name }) => (
      <li
        key={id}
        className="list-group-item"
        role="presentation"
        onClick={() => onPersonSelected(id)}
      >
        {name}
      </li>
    ));

    const content = peopleList ? renderPeopleList(peopleList) : <Spinner />;

    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}
