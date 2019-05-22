import axios from 'axios';
import { GET_NEXT, ORIGINAL } from './types';

export const getOriginal = () => (dispatch) => {
  const url = `${process.env.baseURL2}/articles/?limit=5`;
  const headers = { Authorization: `Bearer ${sessionStorage.token}` };
  return axios
    .get(url, headers)
    .then((response) => {
      const data = response.data.results;
      localStorage.setItem('count', response.data.count);
      localStorage.setItem('next', response.data.next);
      localStorage.setItem('previous', response.data.previous);

      dispatch({
        type: ORIGINAL,
        articles: data,
      });
      dispatch({
        type: 'PAGE_STATE_CHANGE',
        payload: {
          next: response.data.next,
          prev: response.data.previous,
        },
      });
    });
};
export const getNext = url => (dispatch) => {
  const headers = { Authorization: `Bearer ${sessionStorage.token}` };
  return axios
    .get(url, headers)
    .then((response) => {
      const data = response.data.results;
      localStorage.setItem('count', response.data.count);
      localStorage.setItem('next', response.data.next);
      localStorage.setItem('previous', response.data.previous);
      dispatch({
        type: GET_NEXT,
        articles: data,
      });
      dispatch({
        type: 'PAGE_STATE_CHANGE',
        payload: {
          next: response.data.next,
          prev: response.data.previous,
        },
      });
    });
};
