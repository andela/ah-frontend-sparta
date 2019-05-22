import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DisplayArticles from './DisplayArticles';
import './article.scss';


const DashboardArticles = ({ firstArticles, totalArticles }) => (

  <div>
    <p className="text">
      Showing
      {' '}
      <strong>{firstArticles && firstArticles.length}</strong>
      {' '}
      out of
      {' '}
      <strong>{totalArticles && totalArticles.length}</strong>
    </p>
    {
      totalArticles.length > 0 ? (
        totalArticles.map((article) => {
          const articleDate = moment(article.createdAt.slice(0, 10)).format(
            'LL',
          );
          return (
            <div key={article.id} className="container" style={{ marginTop: '20px' }}>
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
