import { combineReducers } from 'redux';
import locationReducer from '../containers/PostcodeForm/locationReducer';
import municipalityReducer from '../containers/PostcodeForm/municipalityReducer';
import googleReducer from '../containers/PostcodeForm/googleReducer';

export default combineReducers({
  locationReducer,
  municipalityReducer,
  googleReducer
});