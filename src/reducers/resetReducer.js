import {
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET,
  CHANGE_PASSWORD,
} from '../actions/types';

const initialState = {
  message: '',
  error: '',
};

const resetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET:
      return {
        ...state,
        message: action.payload,
      };
    case PASSWORD_RESET_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default resetReducer;
