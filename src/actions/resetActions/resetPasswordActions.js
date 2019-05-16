import axios from 'axios';
import { PASSWORD_RESET, PASSWORD_RESET_FAIL } from '../types';
import notification from '../../utils/Notify';

export const resetPasswordActions = email => (dispatch) => {
  const body = { email };
  const url = `${process.env.baseURL}/users/password-reset/`;

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
