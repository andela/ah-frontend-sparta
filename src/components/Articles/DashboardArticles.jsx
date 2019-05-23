import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import DisplayArticles from './DisplayArticles';
import './article.scss';


const DashboardArticles = ({ firstArticles, totalArticles }) => (

  <div>
    <div className="container">
      <span className="text">
        Showing
        {' '}
        <strong>{firstArticles && firstArticles.length}</strong>
        {' '}
        out of
        {' '}
        <strong>{totalArticles && totalArticles.length}</strong>
      </span>
      <a
        className="readingStatsLink"
        href="/reading-stats"
      >
        Check the Articles Reading Stats
      </a>
    </div>
    {
      totalArticles.length > 0 ? (
        totalArticles.map((article) => {
          const articleDate = moment(article.createdAt.slice(0, 10)).format(
            'LL',
          );
          return (
            <div key={article.id} className="container" style={{ marginTop: '20px', clear: 'both' }}>
              <DisplayArticles
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
DashboardArticles.defaultProps = {
  totalArticles: [],
};
DashboardArticles.propTypes = {
  totalArticles: PropTypes.arrayOf(PropTypes.object),
};
export default DashboardArticles;
