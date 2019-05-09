import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DashboardArticles from '../../components/Articles/DashboardArticles';
import { fetchArticles } from '../../actions/articlesActions';


export class Dashboard extends React.Component {
  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <DashboardArticles articles={articles} />
    );
  }
}

Dashboard.defaultProps = {
  articles: [],
};
Dashboard.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.article.articles,
});

export default connect(mapStateToProps,
  { getArticles: fetchArticles })(Dashboard);
