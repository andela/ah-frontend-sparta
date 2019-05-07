import * as types from '../actions/types';

// Initial reducer state
const initialState = {
  username: '',
  email: '',
  password: '',
  confirm_password: '',
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USERNAME_CHANGED:
      return { ...state, username: action.payload };

    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case types.CONF_PASSWORD_CHANGED:
      return { ...state, confirm_password: action.payload };

    case types.ERROR:
      return { ...state, error: action.payload }

    default:
      return state;
  }
};
