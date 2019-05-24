import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import NavBarAccountSection from '../NavBarAccountSection';
import Logo from '../../assets/images/logo.png';
import './NavBar.scss';

const token = localStorage.getItem('accessToken');

export class Navbar extends Component {
  logout = () => {
    const { history } = this.props;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('userAuthenticated');
    history.push('/login');
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-logo">
          <Link to="/dashboard">
            <img src={Logo} alt="site logo" />
          </Link>
        </div>
        <div className="nav-menu">
          <ul>
            {localStorage.getItem('userAuthenticated')
              && (
              <ul>
                <li>
                  <form>
                    <input type="text" placeholder="SEARCH" />
                  </form>
                </li>
                <li className="nav-item">
                  <a href="/article/create">Add Article</a>
                </li>
              </ul>
              )
          }

            {
              <NavBarAccountSection
                sectionType={token ? 'Profile' : 'Accounts'}
                dropdownItems={
                  token ? ['Profile', 'Logout'] : ['Register', 'Login']
                }
                logout={this.logout}
              />
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);

Navbar.propTypes = {
  history: PropTypes.objectOf,
};

Navbar.defaultProps = {
  history: {
    push: () => null,
  },
};
