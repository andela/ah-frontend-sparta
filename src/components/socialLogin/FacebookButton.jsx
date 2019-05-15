import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import loginWithFb from '../../actions/facebookActions';
import store from '../../store';
import './FaceBook.css';

class FaceBookButton extends Component {
   responseFacebook = (response) => {
     const FbToken = response.accessToken;
     store.dispatch(loginWithFb(FbToken));
   };

   render() {
     return (
       <div className="facebookbutton">
         <FacebookLogin
           appId={process.env.appId}
           fields="name,email,picture"
           callback={this.responseFacebook}
           textButton={false}
           icon={<i className="fab fa-facebook" />}
         />
       </div>
     );
   }
}

export default FaceBookButton;
