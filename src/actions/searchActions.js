import { notify } from 'react-notify-toast';
import axios from '../helpers/axiosInstance';
import {
  ERROR, GET_TITLE_FROM_SEARCH,
} from './types';

const { baseURL } = process.env;
export const getArticleFromSearch = title => dispatch => axios
  .get(`${baseURL}/articles?title=${title}`)
  .then((response) => {
    dispatch({ type: GET_TITLE_FROM_SEARCH, payload: response.data });
  })
  .catch(() => {
    dispatch({
      type: ERROR,
      payload: 'Can not fetch your data, please login again',
    });
    notify.show('You have been logged out, Please Login', 'error', 2000);
  });
