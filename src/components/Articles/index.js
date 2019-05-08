import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ArticleImage from '../../assets/images/article_image.jpeg';

const SampleArticles = props => {
  const { articles } = props;

  
  return (
    <div>
      {articles.length > 0 ? (
        articles.map(article => {
          let article_date = moment(article.createdAt.slice(0, 10)).format(
            "LL"
          );
          return (
            <div className="sample-articles" key={article.id}>
              <div className="article-image">
                <img src={ArticleImage} alt="Article image" />
              </div>
              <div className="trending-articles">
                <h4>{article.title}</h4>
                <h6 className="sample_article_start">{article.description}</h6>
                <p className="author_name">
                   Created By <b>{article.author.username}</b>
                </p>
                <h6>
                  {article_date} - {article.article_read_time}
                </h6>
              </div>
            </div>
          );
        })
      ) : (
        <div>No Posts where Found !!!!</div>
      )}
    </div>
  );
};

SampleArticles.propTypes = {
  articles: PropTypes.array.isRequired
};

export default SampleArticles;
