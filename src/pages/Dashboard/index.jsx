import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DashboardArticles from '../../components/Articles/DashboardArticles';
import { fetchArticles } from '../../actions/articlesActions';
import { getOriginal, getNext } from '../../actions/paginationActions';

import './Dashboard.scss';

const SearchAlert = ({ message, color }) => (
  <div className={`alert ${color} alert-dismissible fade show`} role="alert">
    {' '}
    {message}
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

export class Dashboard extends React.Component {
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
    const {
      firstArticles, paginateArticles, pageState: { next, prev },
      articles,
      searchArticles,
    } = this.props;

    const searchResult = this.props.searchArticles.results;

    return (
      <div>
        {searchArticles && searchArticles.count === 0 ? (
          <SearchAlert
            message="OOPS!! The Article you are looking for could be not found. Try again!"
            color="alert-warning"
          />
        ) : (
          <SearchAlert
            message="Woow, your results were found"
            color="alert-success"
          />
        ) }
        {searchResult && searchResult.length !== 0 ? <DashboardArticles totalArticles={searchResult} /> : (paginateArticles.length === 0 ? <DashboardArticles firstArticles={firstArticles} totalArticles={articles} /> : <DashboardArticles paginateArticles={paginateArticles} firstArticles={firstArticles} totalArticles={articles} />)}
        <div className="container pagination-buttons article-btns">
          {prev ? (
            <button type="button" className="btn left pagButton" onClick={this.fetchPrevious}>
              Previous
            </button>
          ) : (
            <button type="button" className="btn left pagButton" disabled>
                Previous
            </button>
          )}
          { next ? (
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

Dashboard.defaultProps = {
  firstArticles: [],
  paginateArticles: [],
  searchArticles: '',
};
Dashboard.propTypes = {
  getArticles: PropTypes.func.isRequired,
  firstArticles: PropTypes.arrayOf(PropTypes.object),
  paginateArticles: PropTypes.arrayOf(PropTypes.object),
  fetchOriginal: PropTypes.func.isRequired,
  fetchNext: PropTypes.func.isRequired,
  searchArticles: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  articles: state.article.articles,
  paginateArticles: state.paginateArticles,
  firstArticles: state.firstArticles,
  pageState: state.pageState,
  searchArticles: state.search,
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

export default connect(mapStateToProps,
  mapDispatchToProps)(Dashboard);
