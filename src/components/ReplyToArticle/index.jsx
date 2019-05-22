import React from 'react';
import '../ReplyToComment';

const ReplyToArticle = ({ onCommentChanged, postComment }) => (
  <div className="form-group shadow-textarea" style={{ overflow: 'hidden' }}>
    <textarea
      className="form-control commentReplyTextarea z-depth-1"
      rows="5"
      name="comment"
      onChange={onCommentChanged}
      placeholder="Comment on Article"
    />
    <button type="submit" className="commentReplyButtn" onClick={postComment}>
      POST
      {' '}
    </button>
  </div>
);

export default ReplyToArticle;
