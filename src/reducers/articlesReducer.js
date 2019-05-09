
import {
  POST_ARTICLE_FAILURE,
  POST_ARTICLE_SUCCESS,
  FETCH_AN_ARTICLE_FAILURE,
  FETCH_AN_ARTICLE_SUCCESS,
  GET_ARTICLES,
} from '../actions/types';

const initialState = { error: undefined, article: undefined, articles: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_ARTICLE_FAILURE:
      return {
        error: action.payload,
        article: undefined,
        articles: undefined,
      };
    case POST_ARTICLE_SUCCESS:
      return {
        article: action.payload,
        error: undefined,
        articles: undefined,
      };
    case FETCH_AN_ARTICLE_SUCCESS:
      return {
        article: action.payload,
        error: undefined,
        articles: undefined,
      };
    case FETCH_AN_ARTICLE_FAILURE:
      return {
        article: undefined,
        error: action.payload,
        articles: undefined,
      };
    case GET_ARTICLES:
      return {
        article: undefined,
        articles: action.payload,
        error: undefined,
      };
    default:
      return state;
  }
};
