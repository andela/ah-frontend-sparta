import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articlesReducer, { firstArticles, paginateArticles } from
  './articlesReducer';
import facebookReducer from './facebookReducer';
import resetReducer from './resetReducer';
import profileReducer from './profileReducer';
import pageStateReducer from './paginationReducer';

export default combineReducers({
  auth: authReducer,
  articles: articlesReducer,
  article: articlesReducer,
  firstArticles,
  paginateArticles,
  auth_fb: facebookReducer,
  resetReducer,
  profile: profileReducer,
  pageState: pageStateReducer,
});
