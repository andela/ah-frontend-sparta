import React from 'react';
import PropTypes from 'prop-types';
import SampleArticles from './index';

const ArticleContainer = ({ articles }) => (
  <div className="wrapper">
    <SampleArticles articles={articles} />
  </div>
);


ArticleContainer.defaultProps = {
  articles: [],
};
ArticleContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};
export default ArticleContainer;
