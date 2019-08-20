import React, { Component } from 'react';

export default class ErrorButton extends Component {
  state = {
    renderError: false,
  };

  render() {
    const { renderError } = this.state;

    if (renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        type="button"
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({ renderError: true })}
      >
        Throw Error
      </button>
    );
  }
}
