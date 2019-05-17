import axios from 'axios';
import { notify } from 'react-notify-toast';
import axiosInstance from '../helpers/axiosInstance';
import {
  POST_ARTICLE_FAILURE,
  POST_ARTICLE_SUCCESS,
  FETCH_AN_ARTICLE_FAILURE,
  FETCH_AN_ARTICLE_SUCCESS,
  GET_ARTICLES,
} from './types';

const postArticleFailure = err => ({
  type: POST_ARTICLE_FAILURE,
  payload: err.response.data.errors,
});

const postArticleSuccess = response => ({
  type: POST_ARTICLE_SUCCESS,
  payload: response.data,
});

const fetchAnArticleFailure = err => ({
  type: FETCH_AN_ARTICLE_FAILURE,
  payload: err.response.data.errors,
});

const fetchAnArticleSuccess = response => ({
  type: FETCH_AN_ARTICLE_SUCCESS,
  payload: response.data,
});

const baseURL = 'https://ah-backend.herokuapp.com/api';


export const postArticle = (articleData, history) => dispatch => (
  axiosInstance.post('articles/', articleData)
    .then((response) => {
      dispatch(postArticleSuccess(response));
      notify.show('Article created Successfully', 'success', 4000);
      history.push('/dashboard');
    }).catch((err) => {
      dispatch(postArticleFailure(err.response.data));
      notify.show('Errors have occured', 'error', 4000);
    })
);

export const fetchArticles = () => dispatch => (
  axios.get(`${baseURL}/articles/`)
    .then((response) => {
      dispatch({
        type: GET_ARTICLES,
        payload: response.data.results,
      });
    })
);
export const getSingleArticle = slug => (dispatch) => {
  axios.get(`${baseURL}/articles/${slug}`)
    .then((response) => {
      dispatch(fetchAnArticleSuccess(response));
    }).catch((err) => {
      dispatch(fetchAnArticleFailure(err.response.data));
      notify.show('Errors have occured', 'error', 4000);
    });
};

export default postArticle;
