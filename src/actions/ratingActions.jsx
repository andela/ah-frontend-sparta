import axios from 'axios';
import notification from '../utils/Notify';


export const successRating = data => ({
  type: 'RATING_SUCCESSFUL',
  data,
});

export const startAction = () => ({
  type: 'RATING_STARTED',
});

export const failedRating = err => ({
  type: 'RATING_FAILED',
  err,
});

const { baseURL } = process.env;
export const userRating = (ratingData, slug) => (dispatch) => {
  const url = `${baseURL}/articles/${slug}/rate`;
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    'Content-Type': 'application/json',
  };

  dispatch(startAction());
  return axios.post(url, ratingData, { headers })
    .then((data) => {
      if (data.data) {
        dispatch(successRating(data.data));
        notification(data.data.message, 'success', 5000);
      } else {
        dispatch(failedRating(data.error.message));
        notification(data.error, 'success', 5000);
      }
    });
};
