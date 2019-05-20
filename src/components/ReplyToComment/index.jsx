import React from 'react';
import './ReplyToComment.scss';

let textareaValue = '';

export const textAreaChanged = (e) => {
  textareaValue = e.target.value;
};

const ReplyToComment = ({ commentId, slug, postReplyToComment }) => (
  <div
    className="form-group shadow-textarea
    offset-1"
    style={{ overflow: 'hidden' }}
  >
    <textarea
      className="form-control commentReplyTextarea z-depth-1"
      rows="4"
      onChange={textAreaChanged}
      placeholder="Reply to Comment"
    />
    <button
      type="submit"
      className="commentReplyButtn"
      onClick={() => postReplyToComment(slug, commentId, textareaValue)}
    >
      POST
    </button>
  </div>
);

export default ReplyToComment;
