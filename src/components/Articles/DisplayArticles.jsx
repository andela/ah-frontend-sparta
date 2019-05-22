
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';
import ArticleIconsComponent from './articlesIcons';


const DisplayArticles = ({ article, articleDate }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="row">
        <div
          className="card col-md-12"
          style={{ boxShadow: '5px 10px 18px #888888' }}
        >
          <h5 className="card-header">{article.title}</h5>
          <div className="card-body">
            <h5 className="card-title">
              Written on
              {' '}
              {articleDate}
            </h5>
            <p className="card-text">{article.description}</p>
            <p className="read_time">{article.article_read_time}</p>
            <p className="author_name">
              Created By
              {' '}
              <b>{article.author.username}</b>
            </p>
            <div className="card-footer custom-footer">
              <Link
                to={{
                  pathname: `/articles/${article.slug}`,
                }}
                className="btn btn-primary float-left read-more-button"
              >
              Read More ...
              </Link>
              <p className="float-right">
                <ArticleIconsComponent />
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

DisplayArticles.defaultProps = {
  article: shape({}),
  articleDate: '',
};
DisplayArticles.propTypes = {
  article: shape({ id: PropTypes.number }),
  articleDate: PropTypes.string,
};


export default DisplayArticles;
