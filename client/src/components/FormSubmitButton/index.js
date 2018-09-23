// The submit button for rendering a map using form details
// Import relevant package, local css and prop types
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormSubmitButton.css';

class FormSubmitButton extends Component {
  static propTypes = {
    handleMapLocation: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className='submitButtonWrapper'>
        <button onClick={this.props.handleMapLocation}>
          Submit
        </button>
      </div>
    );
  }
}

export default FormSubmitButton;
