/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { ClientId, google_social_url } from './GoogleConfig';

class Google extends Component {

  render() {
    const responseGoogle = (response) => {
        console.log(response);
        this.setState({ googleToken: response })
        const accessToken = response['tokenId'];
        console.log(accessToken);
        fetch(google_social_url, {
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify({user_token:{
                auth_token:accessToken
            }})

        }).then(result => result.json()).then(resp=>{console.log(resp)})
    }
    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
      <div>
        <h2>LOGIN WITH FACEBOOK AND GOOGLE</h2>

        <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
        />

        <GoogleLogin
        clientId= {ClientId} 
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      
      </div>
    )
  }
}

export default Google;
