import * as types from './types';

export const usernameChanged = () => {
  return {
    type: types.USERNAME_CHANGED,
    
  };
};

export const emailChanged = () => {
  return {
    type: types.EMAIL_CHANGED,
    
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
    const { password, confirm_password } = user;

    if (password !== confirm_password) {
      dispatch({ type: types.ERROR, payload: 'Your passwords do not match' });
    }
  };
};
