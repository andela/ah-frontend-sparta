import axios from 'axios';
import { CHANGE_PASSWORD } from '../types';
import notification from '../../utils/Notify';

export const ChangePasswordActions = (
  newPassword,
  confirmPassword,
  token,
) => (dispatch) => {
  const body = {
    user: { password: newPassword, confirm_password: confirmPassword },
  };
  const headers = { 'Content-Type': 'application/json' };
  const url = `${process.env.baseURL}/users/reset/${token}/change/`;
  return axios
    .put(url, body, { headers })
    .then((response) => {
      dispatch({
        type: CHANGE_PASSWORD,
        payload: response.data.user.message,
      });
      notification(response.data.user.message, 'success', 5000);
    })
    .catch((error) => {
      if (error.response.data.user) {
        notification(error.response.data.user.error, 'error', 5000);
      } else if (error.response.data.errors.password) {
        notification(error.response.data.errors.password, 'error', 5000);
      } else {
        notification(error.response.data.errors.confirm_password, 'error', 5000);
      }
    });
};
