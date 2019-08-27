import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withDataDetails = (ViewDetails, records) => class extends Component {
  state = {
    item: null,
    loading: true,
    error: false,
    image: null,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId, getData, getImageUrl } = this.props;
    if (prevProps.itemId !== itemId
      || prevProps.getData !== getData
      || prevProps.getImageUrl !== getImageUrl) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    this.setState({
      loading: true,
      error: false,
    });

    if (itemId) {
      getData(itemId)
        .then((item) => this.setState({
          item,
          loading: false,
          image: getImageUrl(item),
        }))
        .catch(() => this.setState({
          error: true,
        }));
    }
  }

  render() {
    const {
      item, image, loading, error,
    } = this.state;

    if (!item) {
      return <span className="title-no-item">Select a person from a list</span>;
    }

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ViewDetails {...this.props} item={item} image={image}>
        {records}
      </ViewDetails>
    );
  }
};

export default withDataDetails;
