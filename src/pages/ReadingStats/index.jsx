import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DisplayArticles from '../../components/Articles/DisplayArticles';
import { fetchReadingStatsActions } from '../../actions';

export class ReadingStats extends Component {
  componentDidMount() {
    const { fetchReadingStats } = this.props;
    fetchReadingStats();
  }

  render() {
    const { readingStats } = this.props;
    return (
      <div>
        {
      readingStats.length > 0 ? (
        readingStats.map(({ article }) => {
          const articleDate = moment(article.createdAt.slice(0, 10)).format(
            'LL',
          );
          return (
            <div key={article.id} className="container" style={{ marginTop: '20px' }}>
              <DisplayArticles
                key={article.id}
                article={article}
                articleDate={articleDate}
              />
              <br />
            </div>

          );
        })
      ) : (
        <div>No Posts where Found !!!!</div>
      )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  readingStats: state.articles.readingStats,
});

export default connect(
  mapStateToProps,
  {
    fetchReadingStats: fetchReadingStatsActions,
  },
)(ReadingStats);
