import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProfileActions } from '../../actions/profileActions';
import './ViewProfile.scss';

export class ViewProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
    };
  }

  componentDidMount() {
    const { fetchProfile } = this.props;
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    this.setState({ email });
    fetchProfile(username);
  }

  render() {
    const {
      profile: {
        username,
        followersNo_,
        followingNo_,
        firstname,
        lastname,
        bio,
        image,
      },
    } = this.props;
    const { email } = this.state;

    return (
      <div className="container viewProfile">
        <div className="row">
          <div className="col-4">
            <div className="imageContainer offset-7">
              <img id="image" src={image} alt="Profile pic" className="image" />
            </div>
            <div className="editProfileButtonWrapper offset-7">
              <Link to="/editProfile" className="editProfileButton">
                Edit Profile
              </Link>
            </div>
          </div>
          <div className="col-8 details">
            <div className="username">{username}</div>
            <div className="involvement">
              <div className="articles">
                <span className="number">0</span>
                {' '}
                Posts
              </div>
              <div className="followers">
                <span className="number">{followersNo_}</span>
                {' '}
                Followers
              </div>
              <div className="following">
                <span className="number">{followingNo_}</span>
                {' '}
                Following
              </div>
            </div>
            <div className="name">
              {firstname}
              {lastname}
            </div>
            <div className="email">{email}</div>
            <div className="bio col-8">{bio}</div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({ profile: state.profile.user });

export default connect(
  mapStateToProps,
  { fetchProfile: fetchProfileActions },
)(ViewProfile);

ViewProfile.propTypes = {
  profile: PropTypes.objectOf,
  fetchProfile: PropTypes.func,
};

ViewProfile.defaultProps = {
  profile: {},
  fetchProfile: () => {},
};
