import { notify } from 'react-notify-toast';
import axios from '../helpers/axiosInstance';
import * as types from './types';

const { baseURL } = process.env;
export const fetchCommentsAction = slug => dispatch => axios
  .get(`${baseURL}/articles/${slug}/comments`)
  .then((response) => {
    dispatch({
      type: types.FETCH_COMMENTS,
      payload: response.data.comments,
    });
  });


export const replyToCommentAction = (slug, commentId, commentReply) => () => {
  const data = {
    comment: {
      body: commentReply,
    },
  };

  axios
    .post(`${baseURL}/articles/${slug}/comments/${commentId}/reply`, data)
    .then(() => {
      location.reload();
    })
    .catch(() => {
      location.reload();
    });
};

export const addCommentToArticleAction = (slug, comment) => () => {
  const data = {
    comment: {
      body: comment,
    },
  };
  axios
    .post(`${baseURL}/articles/${slug}/comments/`, data)
    .then(() => {
      location.reload();
    })
    .catch(() => {
      location.reload();
    });
};

export const deleteArticleCommentAction = (slug, id) => {
  axios
    .delete(`${baseURL}/articles/${slug}/comments/${id}`)
    .then(() => {
      notify.show('Comment deleted', 'success', 2000);
      setTimeout(() => {
        location.reload();
      }, 3000);
    });
};

export const updateArticleCommentAction = (slug, id, updtateComment) => {
  const data = {
    comment: {
      body: updtateComment,
    },
  };

  axios
    .put(`${baseURL}/articles/${slug}/comments/${id}`, data)
    .then(() => {
      notify.show('Comment updated', 'success', 1000);
      setTimeout(() => {
        location.reload();
      }, 2000);
    });
};
