import React from 'react';
import moment from 'moment';
import CommentReplies from '../CommentReplies';
import ReplyToComment from '../ReplyToComment';
import EditCommentDialog from '../EditCommentDialog';

import './Comment.scss';

const Comment = ({
  commentObject: {
    author, body, createdAt, id, replies,
  },
  showReplies,
  replyDisplayState,
  slug,
  postReplyToComment,
  deleteComment,
  updateComment,
  onChangeComment,
}) => (
  <div className="fullComment">
    <div className="card commectCard">
      <div className="card-header commentHeader">
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
      <div className="card-body">
        {body}
      </div>
      <div className="card-footer text-muted commentFooter">
        <div className="replyComment">
          {replies.length === 0
            ? <span className="replyButton" role="presentation" onClick={() => showReplies(id)}>Reply</span>
            : replies.length === 1
              ? <span className="replyButton" role="presentation" onClick={() => showReplies(id)}> 1 Reply</span>
              : (
                <span className="replyButton" role="presentation" onClick={() => showReplies(id)}>
                  {replies.length}
                  {' '}
                  Replies
                </span>
              )}
        </div>
      </div>
    </div>
    {replyDisplayState[`repliesDisplayState${id}`]
      ? (
        <div>
          {replies.map(reply => <CommentReplies key={reply.id} reply={reply} slug={slug} id={id} deleteComment={deleteComment} updateComment={updateComment} onChangeComment={onChangeComment} />)}
          <ReplyToComment commentId={id} slug={slug} postReplyToComment={postReplyToComment} />
        </div>
      )
      : <div />}
    <EditCommentDialog comment={body} updateComment={updateComment} onChangeComment={onChangeComment} id={id} />
  </div>
);

export default Comment;
