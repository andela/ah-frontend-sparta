import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signup_signin from './signupSignupReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({
  auth: authReducer,
  articles:articlesReducer,
  signup_signin
});
