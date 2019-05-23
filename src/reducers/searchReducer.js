import {
  GET_TITLE_FROM_SEARCH,
} from '../actions/types';

const initialState = {
  searchArticles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TITLE_FROM_SEARCH:
      return action.payload;

    default:
      return state;
  }
};
