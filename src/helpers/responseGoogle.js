import axios from 'axios';

const responseGoogle = (response) => {
  axios.post(process.env.googleSocialUrl, {
    user_token: {
      auth_token: response.tokenId,
    },
  }).then((resp) => {
    localStorage.setItem('accessToken', resp.data.auth_token.token);
    document.location.href = '/';
  });
};

export default responseGoogle;
