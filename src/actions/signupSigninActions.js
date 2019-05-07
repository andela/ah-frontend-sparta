import * as types from './types';

export const usernameChanged = username => {
  return {
    type: types.USERNAME_CHANGED,
    payload: username
  };
};

export const emailChanged = email => {
  return {
    type: types.EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = password => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: password
  };
};

export const confPasswordChanged = password => {
  return {
    type: types.CONF_PASSWORD_CHANGED,
    payload: password
  };
};

export const signUpUser = user => {
  return dispatch => {
    const { username, email, password, confirm_password } = user;

    if (password !== confirm_password) {
      dispatch({ type: types.ERROR, payload: 'Your passwords do not match' });
    }
  };
};
