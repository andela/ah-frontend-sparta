import axios from '../helpers/axiosInstance';
import { ERROR, USER } from './types';

export const fetchProfileActions = username => dispatch => (
  axios
    .get(`${process.env.baseURL}/profiles/${username}`)
    .then((response) => {
      dispatch({ type: USER, payload: response.data.profile });
      localStorage.setItem('username', response.data.user.username);
    })
    .catch(() => {
      dispatch({
        type: ERROR,
        payload: 'Can not fetch your data, please login again',
      });
    })
);

export const updateProfileActions = (updatedProfile, history) => (dispatch) => {
  const username = localStorage.getItem('username');
  return axios
    .put(`${process.env.baseURL}/profiles/${username}`, updatedProfile)
    .then((response) => {
      dispatch({ type: USER, payload: response.data.profile });
      history.push('/profile');
    })
    .catch(() => {
      dispatch({
        type: ERROR,
        payload: 'Can not update your data, please login again',
      });
    });
};

export const saveImageActions = (url, username) => (dispatch) => {
  const data = {
    image: url,
  };
  return axios
    .put(`${process.env.baseURL}/profiles/${username}`, data)
    .then(() => {
      localStorage.setItem('image', url);
    })
    .catch(() => {
      dispatch({
        type: 'ERROR',
        payload: 'Image could not be processed',
      });
    });
};
