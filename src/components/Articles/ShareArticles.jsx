import React from 'react';
import ShareLinks from '../../helpers/socialShare';
import './article.scss';


const shareArticles = ({ article }) => {
  const articleShare = ShareLinks(article, article.slug);
  return (
    <div className="icons">
      <div className="dropup">
        <button type="button" className="btn custom-share-button  float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Share
          {' '}
          <i className="fas fa-share-alt" />
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href={articleShare.facebookShare}>
            <i className="fab fa-facebook-square facebook-icon" />
            Facebook
          </a>
          <a className="dropdown-item" href={articleShare.twitterShare}>
            <i className="fab fa-twitter twitter-icon" />
            Twitter
          </a>
          <a className="dropdown-item" href={articleShare.mailshare}>
            <i className="fas fa-envelope-square envelop-icon" />
            Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default shareArticles;
