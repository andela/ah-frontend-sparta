import { notify } from 'react-notify-toast';
import axios from '../helpers/axiosInstance';
import {
  LIKE_AN_ARTICLE, DISLIKE_AN_ARTICLE,
  ERROR, ALREADY_LIKE_AN_ARTICLE,
  ALREADY_DISLIKE_AN_ARTICLE,
} from './types';
import { getSingleArticle } from './articlesActions';

export const likeAnArticle = slug => dispatch => axios
  .post(`${process.env.baseURL}/articles/${slug}/like`, {
    likes: true,
  })
  .then((response) => {
    if (response.data.msg !== 'You have already liked this article') {
      dispatch({ type: LIKE_AN_ARTICLE, payload: 1 });
      notify.show('You have LIKED this Article', 'success', 2000);
      getSingleArticle(slug);
    } else {
      dispatch({ type: ALREADY_LIKE_AN_ARTICLE, payload: 0 });
      notify.show('You have ALREADY LIKED this Article', 'error', 2000);
    }
  })
  .catch(() => {
    dispatch({
      type: ERROR,
      payload: 'Can not fetch your data, please login again',
    });
    notify.show('You have been logged out, Please Login', 'error', 2000);
  });

export const dislikeAnArticle = slug => dispatch => axios
  .post(`${process.env.baseURL}/articles/${slug}/like`, {
    likes: false,
  })
  .then((response) => {
    if (response.data.msg !== 'You have already disliked this article') {
      dispatch({ type: DISLIKE_AN_ARTICLE, payload: 1 });
      notify.show('You have DISLIKED this Article', 'success', 2000);
    } else {
      dispatch({ type: ALREADY_DISLIKE_AN_ARTICLE, payload: 0 });
      notify.show('You have ALREADY DISLIKED this Article', 'error', 2000);
    }
  })
  .catch(() => {
    dispatch({
      type: ERROR,
      payload: 'Can not fetch your data, please login again',
    });
    notify.show('You have been logged out, Please Login', 'error', 2000);
  });
