import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import PersonView from './person-view';
import Spinner from '../spinner';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    const { personId } = this.props;
    if (prevProps.personId !== personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    this.setState({ loading: true });
    if (personId) {
      this.swapiService
        .getPerson(personId)
        .then((person) => this.setState({ person, loading: false }));
    }
  }

  render() {
    const { person, loading } = this.state;

    const data = loading ? <Spinner /> : <PersonView person={person} />;
    const content = person ? data : <span className="title-no-person">Select a person from a list</span>;

    return (
      <div className="person-details card">
        {content}
      </div>
    );
  }
}
