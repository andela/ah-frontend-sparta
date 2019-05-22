import React from 'react';
import PropTypes, { shape } from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Comments from '../../pages/Comments';
import DeleteArticleComponentModel from './DeleteArticleModel';
import avartaImage from '../../assets/images/avarta.png';
import './article.scss';

const ArticleDetail = ({
  article,
  deleteAnArticle,
  comments,
  showReplies,
  replyDisplayState,
  postReplyToComment,
  onCommentChanged,
  postComment,
  deleteComment,
  updateComment,
  onChangeComment,
}) => (
  <div className="container article-detail-container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body customise-card-body">
            <h1 className="card-title article-title ">{article.title}</h1>
            <div className="row">
              <div className="col-md-3">
                <img src={avartaImage} className="img-circle" alt="user-icon" width="70px" height="70px" />
              </div>
            </div>
            <br />
            <button type="button" className="btn btn-sm btn-outline-secondary">Unfollow</button>
            &nbsp;
            &nbsp;
            <button type="button" className="btn btn-sm btn-outline-secondary">Follow</button>
            <p>
              {article.author && (
                <b>
                  Created by
                  {' '}
                  { article.author.username}
                </b>
              )}
            </p>
            <h6 className="card-subtitle mb-2 text-muted">
              {
                              article.createdAt && moment(article.createdAt.slice(0, 10)).format(
                                'LL',
                              )
                  }

            </h6>
            <br />
            <p className="card-text article-text">
              { article.body }
            </p>
            <br />
            <br />
            <br />
            <p className="show-tags">
                Tags
                &nbsp;
                &nbsp;
              {article.tags && article.tags.map(tag => (
                <span
                  className="badge badge-light badge-color"
                >
                  {tag}
                </span>
              ))}
            </p>
            {article.author && article.author.username === localStorage.getItem('username')
              ? (
                <div className="article-btns">
                  <Link
                    to={{
                      pathname: `/articles/edit/${article.slug}`,
                    }}
                    className="btn btn-primary float-left"
                  >
                    Edit
                    {' '}
                    <i className="far fa-edit" />
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger float-right"
                    data-toggle="modal"
                    data-target="#deleteArticleModal"
                  >
                Delete
                    {' '}
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              )
              : ''

            }
            <DeleteArticleComponentModel
              title={article.title}
              slug={article.slug}
              username={
              article.author && article.author.username}
              deleteAnArticle={deleteAnArticle}
            />
            <Comments comments={comments} showReplies={showReplies} replyDisplayState={replyDisplayState} slug={article.slug} postReplyToComment={postReplyToComment} onCommentChanged={onCommentChanged} postComment={postComment} deleteComment={deleteComment} updateComment={updateComment} onChangeComment={onChangeComment} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

ArticleDetail.defaultProps = {
  article: shape(PropTypes.object.isRequired),
};
ArticleDetail.propTypes = {
  article: shape(PropTypes.object.isRequired),
};

export default ArticleDetail;
