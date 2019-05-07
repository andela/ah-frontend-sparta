import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articlesReducer from './articlesReducer';
import signupSignin from './signupSignupReducer';
import facebookReducer from './facebookReducer';

export default combineReducers({
  auth: authReducer,
  signupSignin,
  articles: articlesReducer,
  auth_fb: facebookReducer,
});
