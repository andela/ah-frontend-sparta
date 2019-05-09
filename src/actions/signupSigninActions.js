import { notify } from 'react-notify-toast';
import axios from 'axios';

<<<<<<< HEAD
export const signUpUser = (user, history) => () => {
  axios
    .post(`${process.env.baseURL}/users/register/`, user)
    .then(() => {
      notify.show('Registration successful', 'success', 4000);
      history.push('/login');
    })
    .catch((error) => {
      const errorObject = error.response.data.errors;
      const errorMessage = errorObject[Object.keys(errorObject)[0]][0];
      notify.show(errorMessage, 'error', 4000);
    });
};

export const signInUser = (user, history) => () => {
  axios
    .post(`${process.env.baseURL}/users/login/`, user)
    .then((response) => {
      localStorage.setItem('accessToken', response.data.user.token);
      notify.show('Login successful', 'success', 4000);
      history.push('/');
    })
    .catch((error) => {
      const errorMessage = error.response.data.errors.error[0];
      if (errorMessage === 'This user has not been verified.') {
        notify.show('Please verify your account', 'error', 4000);
      } else {
        notify.show(errorMessage, 'error', 4000);
      }
    });
=======
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
>>>>>>> Adding a node version for heroku
};
