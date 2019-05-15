import axios from 'axios';
import { GET_ARTICLES } from './types';

const fetchArticles = () => dispatch => (
  axios.get(`${process.env.baseURL}/articles/`)
    .then((response) => {
      dispatch({
        type: GET_ARTICLES,
        payload: response.data.results,
      });
    })
);
export default fetchArticles;
