import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ItemView from './item-view';
import Spinner from '../spinner';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    image: null,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;
    if (prevProps.itemId !== itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    this.setState({ loading: true });

    if (itemId) {
      getData(itemId)
        .then((item) => this.setState({
          item,
          loading: false,
          image: getImageUrl(item),
        }));
    }
  }

  render() {
    const { item, loading, image } = this.state;
    const { children } = this.props;

    const data = loading
      ? <Spinner />
      : (
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
  }
}
