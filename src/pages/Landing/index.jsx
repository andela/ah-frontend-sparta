import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleContainer from '../../components/Articles/ArticleContainer';
import LandingImage from '../../assets/images/landing_image.jpg';
import { fetchArticles } from '../../actions/articlesActions';
import { getOriginal, getNext } from '../../actions/paginationActions';
import './Landing.scss';

export class Landing extends Component {
  componentDidMount() {
    const { getArticles, fetchOriginal } = this.props;
    getArticles();
    fetchOriginal();
  }

  fetchData = (event) => {
    event.preventDefault();
    const { fetchNext } = this.props;
    fetchNext(localStorage.next);
  };

  fetchPrevious = (event) => {
    event.preventDefault();
    const { fetchNext } = this.props;
    fetchNext(localStorage.previous);
  };

  render() {
    const { firstarticles, paginatearticles, pageState: { next, prev } } = this.props;
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
        <div>
          <div>
            {paginatearticles.length === 0 ? <ArticleContainer articles={firstarticles} /> : <ArticleContainer articles={paginatearticles} />}
            <br />
            <br />
          </div>
        </div>
        <div className="container pagination-buttons">
          {prev ? (
            <button type="button" className="btn left pagButton" onClick={this.fetchPrevious}>
              Previous
            </button>
          ) : (
            <button type="button" className="btn left pagButton" disabled>
                Previous
            </button>
          )}
          {next ? (
            <button type="button" className="btn right pagButton" onClick={this.fetchData}>
              Next
            </button>
          ) : (
            <button type="button" className="btn right pagButton" disabled>
                Next
            </button>
          )}
        </div>
      </div>
    );
  }
}

Landing.defaultProps = {
  firstarticles: [],
  paginatearticles: [],
};
Landing.propTypes = {
  firstarticles: PropTypes.arrayOf(PropTypes.object),
  paginatearticles: PropTypes.arrayOf(PropTypes.object),
  getArticles: PropTypes.func.isRequired,
  fetchOriginal: PropTypes.func.isRequired,
  fetchNext: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  paginatearticles: state.paginateArticles,
  firstarticles: state.firstArticles,
  pageState: state.pageState,
});
const mapDispatchToProps = dispatch => ({
  fetchOriginal: () => {
    dispatch(getOriginal());
  },
  fetchNext: (url) => {
    dispatch(getNext(url));
  },
  getArticles: () => {
    dispatch(fetchArticles());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
