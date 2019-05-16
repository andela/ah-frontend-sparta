import React from 'react';

import './NavBarAccountSection.scss';

const NavBarAccountSection = ({ sectionType, dropdownItems, logout }) => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      data-toggle="dropdown"
      href="dummy.index"
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {sectionType}
    </a>
    <div className="dropdown-menu">
      {dropdownItems.map(dropdownItem => (
        dropdownItem === 'Logout'
          ? (
            <button
              type="button"
              className="dropdown-item logoutButton"
              onClick={logout}
            >
              {dropdownItem}
            </button>
          )
          : (
            <a
              className="dropdown-item"
              href={`/${dropdownItem.toLowerCase()}`}
            >
              {dropdownItem}
            </a>
          )
      ))}
    </div>
  </li>
);

export default NavBarAccountSection;
