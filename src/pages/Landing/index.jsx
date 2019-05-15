import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleContainer from '../../components/Articles/ArticleContainer';
import LandingImage from '../../assets/images/landing_image.jpg';
import fetchArticles from '../../actions/articlesActions';

import './Landing.scss';

export class Landing extends Component {
  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        <div className="page-banner-image">
          <img className="LandingImage" src={LandingImage} alt="Landing" />
        </div>
        <div className="small-screen">
          <div>
            <form>
              <input type="text" placeholder="SEARCH" />
            </form>
          </div>
          <div>
            <a href="/login">Account</a>
          </div>
        </div>
        <ArticleContainer articles={articles} />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

Landing.defaultProps = {
  articles: [],
};
Landing.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps,
  { getArticles: fetchArticles })(Landing);
