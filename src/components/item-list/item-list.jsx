import React, { Component } from 'react';
import Spinner from '../spinner';

export default class ItemList extends Component {
  state = {
    itemList: null,
  }

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => this.setState({ itemList }));
  }

  render() {
    const { itemList } = this.state;
    const { onItemSelected, renderItem } = this.props;

    const renderItemList = (people) => people.map((item) => {
      const label = renderItem(item);
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

    const content = itemList ? renderItemList(itemList) : <Spinner />;

    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}
