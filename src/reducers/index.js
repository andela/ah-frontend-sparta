import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signupSignin from './signupSignupReducer';
import facebookReducer from './facebookReducer';

export default combineReducers({
  auth: authReducer,
  signupSignin,
  auth_fb: facebookReducer,
});
