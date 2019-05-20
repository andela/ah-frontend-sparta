import {
  LIKE_AN_ARTICLE, DISLIKE_AN_ARTICLE, ALREADY_LIKE_AN_ARTICLE,
  ALREADY_DISLIKE_AN_ARTICLE,
} from '../actions/types';

const initaialState = {
  likes: null,
};

export default (state = initaialState, action) => {
  switch (action.type) {
    case LIKE_AN_ARTICLE:
      return {
        ...state,
        likes: 1,
      };
    case DISLIKE_AN_ARTICLE:
      return {
        ...state,
        likes: 0,
      };
    case ALREADY_LIKE_AN_ARTICLE:
      return {
        ...state,
      };
    case ALREADY_DISLIKE_AN_ARTICLE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
