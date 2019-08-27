import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View) => class extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    const { getData } = this.props;
    if (prevProps.getData !== getData) {
      this.update();
    }
  }

  update() {
    const { getData } = this.props;
    getData()
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <Spinner />;
    }

    return <View {...this.props} data={data} />;
  }
};

export default withData;
