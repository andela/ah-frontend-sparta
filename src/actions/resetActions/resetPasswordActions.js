import axios from 'axios';
import { PASSWORD_RESET, PASSWORD_RESET_FAIL } from '../types';
import notification from '../../utils/Notify';

const { baseURL } = process.env;
export const resetPasswordActions = email => (dispatch) => {
  const body = { email };
  const url = `${baseURL}/users/password-reset/`;

  return axios
    .post(url, body)
    .then((response) => {
      const success = response.data.user;
      dispatch({
        type: PASSWORD_RESET,
        payload: success,
      });

      notification(`Reset link successfully sent to ${email}`, 'success', 5000);
    }).catch((error) => {
      const err = error.response.data.user.message;
      dispatch({
        type: PASSWORD_RESET_FAIL,
        payload: err,
      });
      notification(err, 'error', 5000);
    });
};
