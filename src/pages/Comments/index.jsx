import React from 'react';
import Comment from '../../components/Comment';
import ReplyToArticle from '../../components/ReplyToArticle';

function structureComments(comments, showReplies, replyDisplayState, slug, postReplyToComment, deleteComment, updateComment, onChangeComment) {
  const jsxComments = [];
  for (let i = 0; i < comments.length; i += 1) {
    const comment = comments[i];
    jsxComments.push(<Comment key={comment.id} commentObject={comment} showReplies={showReplies} replyDisplayState={replyDisplayState} slug={slug} postReplyToComment={postReplyToComment} deleteComment={deleteComment} updateComment={updateComment} onChangeComment={onChangeComment} />);
  }
  return jsxComments;
}

const Comments = ({
  comments,
  showReplies,
  replyDisplayState,
  slug,
  postReplyToComment,
  onCommentChanged,
  postComment,
  deleteComment,
  updateComment,
  onChangeComment,
}) => (
  <div>
    <div style={{ marginTop: 100, marginBottom: 15 }}>
      <ReplyToArticle
        onCommentChanged={onCommentChanged}
        postComment={postComment}
      />
      <span style={{ fontSize: 28 }}>
        {comments.length}
        {' '}
        Comments
      </span>
    </div>
    {structureComments(comments, showReplies, replyDisplayState, slug, postReplyToComment, deleteComment, updateComment, onChangeComment)}
  </div>
);

export default Comments;
