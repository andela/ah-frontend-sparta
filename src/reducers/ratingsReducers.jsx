import {
  RATING_STARTED,
  RATING_SUCCESSFUL,
  RATING_FAILED,
} from '../actions/types';

const intialState = {
  error: null,
  successMsg: null,
};

const ratingReducer = (state = intialState, action) => {
  switch (action.type) {
    case RATING_STARTED:
      return {
        ...state,
        successMsg: null,
        error: null,
      };
    case RATING_SUCCESSFUL:
      return {
        ...state,
        successMsg: action.data,
      };
    case RATING_FAILED:
      return {
        ...state,
        error: action.err,
      };

    default:
      return state;
  }
};

export default ratingReducer;
