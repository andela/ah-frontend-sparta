import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signup_signin from './signupSignupReducer'

export default combineReducers({
  auth: authReducer,
  signup_signin
});
