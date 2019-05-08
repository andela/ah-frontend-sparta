import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signupSignin from './signupSignupReducer';

export default combineReducers({
  auth: authReducer,
  signupSignin,
});
