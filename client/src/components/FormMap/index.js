// The google map component, renders on submit
// Import relevant package, component, local css and prop types
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import FormMapMarker from '../FormMapMarker';
import './FormMap.css';

class FormMap extends Component {
  static propTypes = {
    center: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    municipality: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className='mapArea'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.apiKey }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <FormMapMarker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={
              `${this.props.municipality}\n
                ${this.props.location}\n
                ${this.props.postcode}`
            }
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default FormMap;
