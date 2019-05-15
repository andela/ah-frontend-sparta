import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DisplayTrendingArticles from './DisplayTrendingArticles';
import getRandomArticles from '../../helpers/randomArticles';

const TrendingArticles = ({ articles }) => {
  const randomArray = getRandomArticles(5, articles);
  return (
    <div>
      <h1>Trending</h1>
      <br />
      <hr />
      <br />
      {articles.length > 0 ? (
        randomArray.map((article) => {
          const articleDate = moment(
            article.createdAt.slice(0, 10),
          ).format('LL');
          return (
            <div key={article.id}>
              <DisplayTrendingArticles
                articleID={article.id}
                trendingArticles={article}
                articleDate={articleDate}
              />
            </div>
          );
        })
      ) : (
        <div>No Trending Articles where Found !!!!</div>
      )}
    </div>
  );
};

TrendingArticles.defaultProps = {
  articles: [],
};
TrendingArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

export default TrendingArticles;
