import React from 'react';
import moment from 'moment';
import './CommentReplies.scss';
import EditCommentDialog from '../EditCommentDialog';

const CommentReplies = (
  {
    reply: {
      id, body, author, createdAt,
    },
    slug,
    deleteComment,
    updateComment,
    onChangeComment,
  },
) => (
  <div>
    <div className="card commectCard offset-1">
      <div className="card-header commentHeader replyCard-header">
        <div className="authorDataContainer">
          {author.image ? (
            <img
              className="imagePlaceholder"
              src={author.image}
              alt="Commenter"
            />
          ) : (
            <div className="imagePlaceholder" />
          )}
          <div className="authorData">
            <b>{author.username}</b>
            <div className="text-muted commentDate">
              {moment(createdAt.slice(0, 10)).format('LL')}
            </div>
          </div>
        </div>
        <div className="dropdown commentMenu">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              type="button"
              className="dropdown-item"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Edit
            </button>
            <button
              id="deleteButton"
              type="button"
              className="dropdown-item"
              onClick={() => deleteComment(slug, id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">{body}</div>
    </div>
    <EditCommentDialog comment={body} updateComment={updateComment} onChangeComment={onChangeComment} id={id} />
  </div>
);

export default CommentReplies;
