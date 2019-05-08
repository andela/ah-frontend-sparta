import React from 'react';
import './NavBar.scss';
import Logo from '../../assets/images/logo.png';

const Navbar = () => {
    return (
      <div className="nav">
        <div className="nav-logo">
          <img src={Logo} alt="site logo" />
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <form>
                <input type="text" placeholder="SEARCH" />
              </form>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Accounts
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/register">
                  Register
                </a>
                <a className="dropdown-item" href="/login">
                  Login
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );

}

export default Navbar;
