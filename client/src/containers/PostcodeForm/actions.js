import axios from 'axios';
const getLocationsUrl = 'http://localhost:3050/api/location';
const getMunicipalitiesUrl = 'http://localhost:3050/api/municipality';

export const getLocationsSuccess = (locations) => {
  return {
    type: 'LOCATION_SUCCESS',
    payload: locations
  }
};

export const getLocations = (postcode) => {
  return (dispatch) => {
    return axios.post(getLocationsUrl, {
      postcode: postcode
    })
      .then(response => {
        dispatch(getLocationsSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const getMunicipalitiesSuccess = (municipalities) => {
  return {
    type: 'MUNICIPALITY_SUCCESS',
    payload: municipalities
  }
};

export const getMunicipalities = (postcode) => {
  return (dispatch) => {
    return axios.post(getMunicipalitiesUrl, {
      postcode: postcode
    })
      .then(response => {
        dispatch(getMunicipalitiesSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const getGoogleGeocodingSuccess = (coordinates) => {
  return {
    type: 'GEOCODING_SUCCESS',
    payload: coordinates
  }
};

export const getGoogleGeocoding = (postcode, location, municipality, apiKey) => {
  const getGoogleGeocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}+${location}+${municipality}&key=${apiKey}`;
  return (dispatch) => {
    return axios.get(getGoogleGeocodingUrl)
      .then(response => {
        dispatch(getGoogleGeocodingSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};