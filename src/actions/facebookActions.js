import axios from 'axios';
import {
  IS_AUTHENTICATING_WITH_FB_STARTED,
  FB_AUTH_DONE_SUCCESS,
  USER_AUTHENTICATED,
} from './types';
import { AppUrl } from '../components/socialLogin/FacebookConfig';

const loginWithFb = token => (dispatch) => {
  dispatch({
    type: IS_AUTHENTICATING_WITH_FB_STARTED,
  });
  return axios.post(AppUrl, {
    user_token: {
      auth_token: token,
    },
  }).then((resp) => {
    dispatch({
      type: USER_AUTHENTICATED,
      payload: { userAuthenticated: true },
    });
    dispatch({
      type: FB_AUTH_DONE_SUCCESS,
      payload: resp.data.auth_token.token,
    });
    localStorage.setItem('accessToken', resp.data.auth_token.token);
    localStorage.setItem('userAuthenticated', true);
    document.location.href = '/dashboard';
  });
};

export default loginWithFb;
