// The Municipality field, uses municipalities derived from postcode
// Import relevant package, local css and prop types
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown'
import './MunicipalityField.css';
import 'react-dropdown/style.css'

class MunicipalityField extends Component {
  static propTypes = {
    municipalities: PropTypes.array.isRequired,
    handleMunicipalityChange: PropTypes.func.isRequired,
    municipality: PropTypes.string.isRequired,
  };

  render() {
    let items = [];
    this.props.municipalities.forEach(element => {
      items.push(element.name);
    });

    return (
      <div className='municipalityFieldArea' >
        <div className='municipalityFieldTitle'>
          Municipality
      </div>
        <Dropdown options={items} onChange={this.props.handleMunicipalityChange} value={this.props.municipality} placeholder="Select an option" />
      </div>
    );
  }
}

export default MunicipalityField;
