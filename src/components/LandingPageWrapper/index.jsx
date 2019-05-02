import React from 'react';
import moment from 'moment';
import BookmarkImage from '../../assets/images/bookmark.png';
import ArticleImage from '../../assets/images/article_image.jpeg';
import ARTICLE_DATA from '../../data/sample_articles';

const LandingPageWrapper = () => {
  const articles = ARTICLE_DATA.results;

  return (
    <div className="wrapper">
      <div>
        {articles.length > 0 ? (
          articles.map((article) => {
            const articleDate = moment(article.createdAt.slice(0, 10)).format(
              'LL',
            );
            return (
              <div className="sample-articles" key={article.id}>
                <div className="article-image">
                  <img src={ArticleImage} alt="Article" />
                </div>
                <div className="trending-articles">
                  <h4>{article.title}</h4>
                  <h6 className="sample_article_start">
                    {article.description}
                  </h6>
                  <p className="author_name">
                    <b>
                      {`${article.author.firstname} ${article.author.lastname}`}
                    </b>
                  </p>
                  <h6>
                    {articleDate}
                    {' '}
                    - 3 min read
                  </h6>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Posts where Found !!!!</div>
        )}
      </div>

      <div>
        <h1>Trending</h1>
        <br />
        <hr />
        <br />

        <div className="trending">
          <div className="trending-articles">
            <h4>Why do we sleep</h4>
            <p className="author_name">By Francis Kiryowa</p>
            <h6>APR 27, 2019 - 3 min read</h6>
          </div>
          <div className="book-mark-holder">
            <img
              src={BookmarkImage}
              className="bookmark-image"
              alt="bookmark"
            />
          </div>
        </div>
        <br />
        <div className="trending">
          <div className="trending-articles">
            <h4>Why do we sleep</h4>
            <p className="author_name">By Francis Kiryowa</p>
            <h6>APR 27, 2019 - 3 min read</h6>
          </div>
          <div className="book-mark-holder">
            <img
              src={BookmarkImage}
              className="bookmark-image"
              alt="bookmark"
            />
          </div>
        </div>
        <br />
        <div className="trending">
          <div className="trending-articles">
            <h4>Why do we sleep</h4>
            <p className="author_name">By Francis Kiryowa</p>
            <h6>APR 27, 2019 - 3 min read</h6>
          </div>
          <div className="book-mark-holder">
            <img
              src={BookmarkImage}
              className="bookmark-image"
              alt="bookmark"
            />
          </div>
        </div>
        <br />
        <div className="trending">
          <div className="trending-articles">
            <h4>Why do we sleep</h4>
            <p className="author_name">By Francis Kiryowa</p>
            <h6>APR 27, 2019 - 3 min read</h6>
          </div>
          <div className="book-mark-holder">
            <img
              src={BookmarkImage}
              className="bookmark-image"
              alt="bookmark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageWrapper;
