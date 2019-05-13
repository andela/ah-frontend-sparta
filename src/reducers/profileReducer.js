import { USER, ERROR } from '../actions/types';

const initialState = {
  error: '',
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return { ...state, user: action.payload };

    case ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
