import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articlesReducer from './articlesReducer';
import facebookReducer from './facebookReducer';
import resetReducer from './resetReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  articles: articlesReducer,
  article: articlesReducer,
  auth_fb: facebookReducer,
  resetReducer,
  profile: profileReducer,
});
