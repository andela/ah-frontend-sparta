import * as types from '../actions/types';

const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS:
      return action.payload;

    default:
      return state;
  }
};
