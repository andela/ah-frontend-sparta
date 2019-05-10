import { notify } from 'react-notify-toast';
import axios from 'axios';
import config from '../../dist/config';

export const signUpUser = (user, history) => () => {
  axios
    .post(`${config.baseURL}/register/`, user)
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
    .post(`${config.baseURL}/login/`, user)
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
};
