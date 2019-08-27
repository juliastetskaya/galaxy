import React, { Component } from 'react';
import Spinner from '../spinner';

const withDataDetails = (ViewDetails, records) => class extends Component {
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
    const { item, image, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <ViewDetails {...this.props} item={item} image={image}>
        {records}
      </ViewDetails>
    );
  }
};

export default withDataDetails;
