// The google map marker component, renders as a box with text on the map
// Import local css and prop types
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormMapMarker.css';

class FormMapMarker extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className='overlay'>
        <div className='overlayText'>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default FormMapMarker;
