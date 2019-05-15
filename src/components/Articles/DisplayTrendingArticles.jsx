
import React from 'react';
import PropTypes, { shape } from 'prop-types';
import BookmarkImage from '../../assets/images/bookmark.png';


const DisplayTrendingArticles = ({ trendingArticles, articleDate }) => (
  <div className="trending">
    <div className="trending-articles">
      <h4>{trendingArticles.title}</h4>
      <p className="author_name">

        <b>
          {' '}
          Created By
          {' '}
          {trendingArticles.author.username}
        </b>
      </p>
      <h6>
        { articleDate }
          -
        {trendingArticles.article_read_time}
      </h6>
    </div>
    <div className="book-mark-holder">
      <img
        src={BookmarkImage}
        alt="article-bookmark-icon"
        className="bookmark-image"
      />
    </div>
    <br />
  </div>
);

DisplayTrendingArticles.defaultProps = {
  trendingArticles: shape(PropTypes.object.isRequired),
  articleDate: '',
};
DisplayTrendingArticles.propTypes = {
  trendingArticles: shape(PropTypes.object.isRequired),
  articleDate: PropTypes.string,
};

export default DisplayTrendingArticles;
