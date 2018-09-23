// The Location field component, uses postcode derived locations
// Import relevant package, local css and prop types
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import './LocationField.css';

const style = {
  display: 'inline-block',
  width: '100%'
}

const menu = {
  minWidth: '356.219px',
  borderRadius: '3px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2px 0',
  fontSize: '18px',
  position: 'fixed',
  overflow: 'auto',
  maxHeight: '50%',
}

class LocationField extends Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    handleLocationChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className='locationFieldArea'>
        <div className='locationFieldTitle'>
          Locations:
        </div>
        <div>
          <Autocomplete
            items={this.props.locations}
            wrapperStyle={style}
            inputProps={{ className: "locationFieldInput" }}
            menuStyle={menu}
            shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.name}
            renderItem={(item, highlighted) =>
              <div
                key={item.name}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
              >
                {item.name}
              </div>
            }
            value={this.props.location}
            onChange={event => this.props.handleLocationChange(event.target.value)}
            onSelect={value => this.props.handleLocationChange(value)}
          />
        </div>
      </div>
    );
  }
}

export default LocationField;
