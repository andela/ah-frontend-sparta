import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articlesReducer from './articlesReducer';
import signupSignin from './signupSignupReducer';

export default combineReducers({
  auth: authReducer,
  signupSignin,
  articles: articlesReducer,
});
