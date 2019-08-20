import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import PersonView from './person-view';
import Spinner from '../spinner';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: {},
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

    if (!person) {
      return <span>Select a person from a list</span>;
    }

    const content = loading ? <Spinner /> : <PersonView person={person} />;

    return (
      <div className="person-details card">
        {content}
      </div>
    );
  }
}
