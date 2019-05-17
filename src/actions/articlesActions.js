import axios from 'axios';
import { notify } from 'react-notify-toast';
import axiosInstance from '../helpers/axiosInstance';
import {
  POST_ARTICLE_FAILURE,
  POST_ARTICLE_SUCCESS,
  FETCH_AN_ARTICLE_FAILURE,
  FETCH_AN_ARTICLE_SUCCESS,
  GET_ARTICLES,
  DELETE_AN_ARTICLE_SUCCESS,
  DELETE_AN_ARTICLE_FAILURE,
  EDIT_AN_ARTICLE_SUCCESS,
  EDIT_AN_ARTICLE_FAILURE,

} from './types';

const postArticleFailure = err => ({
  type: POST_ARTICLE_FAILURE,
  payload: err,
});

const postArticleSuccess = response => ({
  type: POST_ARTICLE_SUCCESS,
  payload: response.data,
});

const fetchAnArticleFailure = err => ({
  type: FETCH_AN_ARTICLE_FAILURE,
  payload: 'Errors have occured',
});

const fetchAnArticleSuccess = response => ({
  type: FETCH_AN_ARTICLE_SUCCESS,
  payload: response.data,
});

const deleteArticleSuccess = response => (
  {
    type: DELETE_AN_ARTICLE_SUCCESS,
    payload: 'successfully deleted an article',
  }
);

const deleteArticleFailure = err => (
  {
    type: DELETE_AN_ARTICLE_FAILURE,
    payload: 'Errors have occured',
  }
);

const editArticleSuccess = response => (
  {
    type: EDIT_AN_ARTICLE_SUCCESS,
    payload: response.data,
  }
);

const editArticleFailure = err => (
  {
    type: EDIT_AN_ARTICLE_FAILURE,
    payload: 'Errors have occured',
  }
);
export const postArticle = (
  articleData,
  props,
) => dispatch => axiosInstance.post('articles/', articleData)
  .then((response) => {
    dispatch(postArticleSuccess(response));
    notify.show('Article created Successfully', 'success', 4000);
    props.history.push('/dashboard');
  }).catch((err) => {
    dispatch(postArticleFailure(err.response.data));
    notify.show('Errors have occured', 'error', 4000);
  });

export const fetchArticles = () => dispatch => axios.get(`${process.env.baseURL}/articles/`)
  .then((response) => {
    dispatch({
      type: GET_ARTICLES,
      payload: response.data.results,
    });
  });

export const getSingleArticle = slug => dispatch => axios.get(`${process.env.baseURL}/articles/${slug}`)
  .then((response) => {
    dispatch(fetchAnArticleSuccess(response));
  }).catch((err) => {
    console.log(err.response.data);
    dispatch(fetchAnArticleFailure(err.response.data));
    notify.show('Errors have occured', 'error', 4000);
  });

export const deleteSingleArticle = (slug, props) => dispatch => axiosInstance.delete(`articles/${slug}`)
  .then((response) => {
    dispatch(deleteArticleSuccess(response));
    notify.show('Article successfully deleted', 'success', 4000);
    props.history.push('/dashboard');
  })
  .catch((err) => {
    dispatch(deleteArticleFailure(err));
    notify.show('Errors have occured', 'error', 4000);
  });

export const editSingleArticle = (
  articleData,
  props,
  slug,
) => dispatch => axiosInstance.put(`articles/${slug}`, articleData)
  .then((response) => {
    dispatch(editArticleSuccess(response));
    notify.show('Article successfully edited', 'success', 4000);
    props.history.push('/dashboard');
  }).catch((err) => {
    dispatch(editArticleFailure(err.response.data));
    notify.show('Errors have occured', 'error', 4000);
  });


export default postArticle;
