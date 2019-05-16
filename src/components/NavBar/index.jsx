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
    history.push('/login');
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="site logo" />
          </Link>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <form>
                <input type="text" placeholder="SEARCH" />
              </form>
            </li>
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
