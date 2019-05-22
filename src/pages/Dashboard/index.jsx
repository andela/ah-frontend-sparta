import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DashboardArticles from '../../components/Articles/DashboardArticles';
import { fetchArticles } from '../../actions/articlesActions';
import { getOriginal, getNext } from '../../actions/paginationActions';

import './Dashboard.scss';


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
    } = this.props;

    return (
      <div>
        {paginateArticles.length === 0 ? <DashboardArticles firstArticles={firstArticles} totalArticles={articles} /> : <DashboardArticles paginateArticles={paginateArticles} firstArticles={firstArticles} totalArticles={articles} />}
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
};
Dashboard.propTypes = {
  getArticles: PropTypes.func.isRequired,
  firstArticles: PropTypes.arrayOf(PropTypes.object),
  paginateArticles: PropTypes.arrayOf(PropTypes.object),
  fetchOriginal: PropTypes.func.isRequired,
  fetchNext: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.article.articles,
  paginateArticles: state.paginateArticles,
  firstArticles: state.firstArticles,
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

export default connect(mapStateToProps,
  mapDispatchToProps)(Dashboard);
