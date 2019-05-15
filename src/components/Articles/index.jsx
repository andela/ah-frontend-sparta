import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DisplaySampleArticles from './DisplaySampleArticles';


const SampleArticles = ({ articles }) => (
  <div>
    {
    articles.length > 0 ? (
      articles.map((article) => {
        const articleDate = moment(article.createdAt.slice(0, 10)).format(
          'LL',
        );
        return (
          <div key={article.id}>
            <DisplaySampleArticles
              sampleArticle={article}
              articleDate={articleDate}
            />
          </div>

        );
      })
    ) : (
      <div>No Posts where Found !!!!</div>
    )}
  </div>
);

SampleArticles.defaultProps = {
  articles: [],
};
SampleArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

export default SampleArticles;
