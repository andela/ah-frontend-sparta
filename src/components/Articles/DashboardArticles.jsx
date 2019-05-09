import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DisplayArticles from './DisplayArticles';
import './article.scss';


const DashboardArticles = ({ articles }) => (

  <div>
    {
            articles.length > 0 ? (
              articles.map((article) => {
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
  articles: [],
};
DashboardArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};
export default DashboardArticles;
