import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArticleFromSearch } from '../../actions/searchActions';
import NavBarAccountSection from '../NavBarAccountSection';
import Logo from '../../assets/images/logo.png';
import './NavBar.scss';
import Search from '../Search/Search';

const token = localStorage.getItem('accessToken');

export class Navbar extends Component {
  state = {
    query: '',
  }

  logout = () => {
    const { history } = this.props;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('userAuthenticated');
    history.push('/login');
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSearch=(event) => {
    event.preventDefault();
    const { getSearch } = this.props;
    const { query } = this.state;
    getSearch(query);
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
                  <Search
                    handleChange={this.handleChange}
                    query={this.state.query}
                    handleSearch={this.handleSearch}
                    id="search"
                  />
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

const mapStateProps = state => ({
  searchedArticles: state.search,
});

export default withRouter(
  connect(mapStateProps, {
    getSearch: getArticleFromSearch,
  })(Navbar),
);

Navbar.propTypes = {
  history: PropTypes.objectOf,
};

Navbar.defaultProps = {
  history: {
    push: () => null,
  },
};
