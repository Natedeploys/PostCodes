// The Postcode field component, updates parent state and submits request
// Import local css and prop types
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostcodeField.css';

class PostcodeField extends Component {
  static propTypes = {
    postcode: PropTypes.string.isRequired,
    onChangePostcode: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className='postcodeField'>
        <div className='postcodeFieldTitle'>
          Postcode:
        </div>
        <input
          type="number"
          maxLength="4"
          name="postcode"
          value={this.props.postcode}
          onChange={this.props.onChangePostcode}
        />
      </div>
    );
  }
}

export default PostcodeField;
