import React from 'react';
import PropTypes, { shape } from 'prop-types';
import ArticleImage from '../../assets/images/article_image.jpeg';


const DisplaySampleArticles = ({ sampleArticle, articleDate }) => (
  <div className="sample-articles">
    <div className="article-image">
      <img src={ArticleImage} alt="Article" />
    </div>
    <div className="trending-articles">
      <h4>{sampleArticle.title}</h4>
      <h6 className="sample_article_start">
        {sampleArticle.description}
      </h6>
      <p className="author_name">
        Created By
        {' '}
        <b>{sampleArticle.author.username}</b>
      </p>
      <h6>
        { articleDate }
        {' '}
        -
        {sampleArticle.article_read_time}
      </h6>
    </div>
  </div>
);

DisplaySampleArticles.defaultProps = {
  sampleArticle: shape(PropTypes.object.isRequired),
  articleDate: '',
};
DisplaySampleArticles.propTypes = {
  sampleArticle: shape(PropTypes.object.isRequired),
  articleDate: PropTypes.string,
};


export default DisplaySampleArticles;
