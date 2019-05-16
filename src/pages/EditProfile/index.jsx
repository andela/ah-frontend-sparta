import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import EditProfileInput from '../../components/EditProfileInput';
import ProgressBar from '../../components/ProgressBar';
import {
  fetchProfileActions,
  updateProfileActions,
  saveImageActions,
} from '../../actions/profileActions';
import './EditProfile.scss';


export class EditProfile extends Component {
  state = {
    imageLoader: 0,
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
    });

    const { fetchProfile } = this.props;
    const username = localStorage.getItem('username');
    this.setState({ username });
    fetchProfile(username);
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { updateProfile, history } = this.props;
    e.preventDefault();
    updateProfile(this.state, history);
  }

  uploadImage=(files) => {
    const { saveImage } = this.props;
    const { username } = this.state;
    const task = firebase
      .storage()
      .ref(`images/${files[0].name}`)
      .put(files[0]);
    task.on('state_changed', (snapshot) => {
      const progress = Math
        .round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({
        imageLoader: progress,
      });
    });
    task.then(() => {
      firebase.storage()
        .ref(`images/${files[0].name}`)
        .getDownloadURL().then((url) => {
          saveImage(url, username);
        });
    });
  }

  render() {
    const {
      profile: {
        username, firstname, lastname, bio, image,
      },
    } = this.props;
    const { imageLoader } = this.state;
    const email = localStorage.getItem('email');

    return (
      <div className="container">
        <div className="row">
          <div className="col" />
          <div className="title col">
            <h2>Edit Profile</h2>
          </div>
          <div className="col" />
        </div>
        <div className="row">
          <div className="col-3 cube">
            <div className="offset-5">
              {imageLoader !== 0
                ? <ProgressBar percentage={imageLoader} /> : <div />}
            </div>
            <div className="imageContainer offset-5">
              <img className="image" src={image} alt="profile pic" />
            </div>
            <div className="offset-6 changePic">
              <label htmlFor="file">
                  Change picture
                <input
                  className="inputFile"
                  onChange={e => this.uploadImage(e.target.files)}
                  type="file"
                  id="file"
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <form className="col form" onSubmit={this.handleSubmit}>
            <EditProfileInput
              label="Username"
              id="username"
              type="text"
              value={username}
              onChange={this.onChange}
            />
            <EditProfileInput
              label="Firstname"
              id="firstname"
              type="text"
              value={firstname}
              onChange={this.onChange}
            />
            <EditProfileInput
              label="Lastname"
              id="lastname"
              type="text"
              value={lastname}
              onChange={this.onChange}
            />
            <EditProfileInput
              label="email"
              id="email"
              type="email"
              value={email}
              disabled
            />
            <div className="col-6 bio">
              <label htmlFor="bio">
                Bio:
                <br />
                <textarea
                  className="EditProfileTextarea"
                  rows="7"
                  cols="50"
                  id="bio"
                  type="text"
                  defaultValue={bio}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <button
              className="updateButton"
              type="submit"
            >
                UPDATE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => (
  {
    profile: state.profile.user,
    imageLoading: state.profile.imageLoading,
  }
);

export default withRouter(
  connect(
    mapStateToProps,
    {
      updateProfile: updateProfileActions,
      fetchProfile: fetchProfileActions,
      saveImage: saveImageActions,
    },
  )(EditProfile),
);

EditProfile.propTypes = {
  profile: PropTypes.objectOf,
  history: PropTypes.objectOf,
  saveImage: PropTypes.func,
  fetchProfile: PropTypes.func,
  updateProfile: PropTypes.func,
};

EditProfile.defaultProps = {
  profile: {},
  history: {},
  saveImage: () => {},
  fetchProfile: () => {},
  updateProfile: () => {},
};
