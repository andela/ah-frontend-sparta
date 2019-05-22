import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import ArticleDetail from '../../components/Articles/ArticleDetail';

import {
  getSingleArticle,
  deleteSingleArticle,
} from '../../actions/articlesActions';
import {
  likeAnArticle,
  dislikeAnArticle,
} from '../../actions/likeDislikeActions';
import {
  fetchCommentsAction,
  replyToCommentAction,
  addCommentToArticleAction,
  deleteArticleCommentAction,
  updateArticleCommentAction,
} from '../../actions/index';

export class SingleArticles extends React.Component {

  state = {
    likes: '',
    dislikes: '',
    count: 1,
    displayEditCommentDialog: false,
  }

  componentDidMount() {
    const { getArticle, fetchComments, match } = this.props;
    const { slug } = match.params;
    getArticle(slug);
    fetchComments(slug);
  }

  componentWillReceiveProps(nextProps) {
    const { likeDislike: { likes } } = nextProps;
    const { getArticle } = this.props;
    const { slug } = this.props.match.params;
    const { count } = this.state;

    if (likes <= 1) {
      this.setState({ count: 1 });
      if (count === 1) {
        getArticle(slug);
        this.setState({ count: 0 });
      }
    }
  }

  showReplies = (id) => {
    this.setState(prevState => ({ [`repliesDisplayState${id}`]: !prevState[`repliesDisplayState${id}`] }));
  }

  postReplyToComment = (slug, commentId, commentReply) => {
    const { replyToComment } = this.props;
    replyToComment(slug, commentId, commentReply);
  }

  onCommentChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  postComment = () => {
    const { match: { params: { slug } }, addCommentToArticle } = this.props;
    const { comment } = this.state;
    addCommentToArticle(slug, comment);
  }

  deleteComment = (slug, id) => {
    const { deleteArticleComment } = this.props;
    deleteArticleComment(slug, id);
  }

  updateComment = (id) => {
    const { commentToArticle } = this.state;
    const { match: { params: { slug } }, updateArticleComment } = this.props;
    if (commentToArticle) {
      updateArticleComment(slug, id, commentToArticle);
    } else {
      notify.show('No Changes made', 'info', 2000);
    }
  }

  onChangeComment = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

likeArticle = () => {
  const { slug } = this.props.match.params;
  this.props.likeAnArticle(slug);
}

dislikeArticle = () => {
  const { slug } = this.props.match.params;
  this.props.dislikeAnArticle(slug);
}

deleteAnArticle = (slug) => {
  const { deleteArticle } = this.props;
  deleteArticle(slug, this.props);
  document.getElementById(`cancelModal${slug}`).click();
}

render() {
  const { article, comments } = this.props;
  return (
    <ArticleDetail
      article={article.article}
      likeArticle={this.likeArticle}
      dislikeArticle={this.dislikeArticle}
      deleteAnArticle={this.deleteAnArticle}
      comments={comments}
      showReplies={this.showReplies}
      replyDisplayState={this.state}
      postReplyToComment={this.postReplyToComment}
      onCommentChanged={this.onCommentChanged}
      postComment={this.postComment}
      deleteComment={this.deleteComment}
      updateComment={this.updateComment}
      onChangeComment={this.onChangeComment}
    />
  );
}
}

SingleArticles.defaultProps = {
  article: PropTypes.shape(PropTypes.object.isRequired),
  match: PropTypes.shape(PropTypes.object.isRequired),
};

SingleArticles.propTypes = {
  getArticle: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  article: PropTypes.shape(PropTypes.object.isRequired),
  match: PropTypes.shape(PropTypes.object.isRequired),
};

const mapStateToProps = state => ({
  article: state.article,
  comments: state.comments,
  likeDislike: state.likeDislike,
});

export default connect(mapStateToProps,
  {
    getArticle: getSingleArticle,
    deleteArticle: deleteSingleArticle,
    fetchComments: fetchCommentsAction,
    replyToComment: replyToCommentAction,
    addCommentToArticle: addCommentToArticleAction,
    deleteArticleComment: deleteArticleCommentAction,
    updateArticleComment: updateArticleCommentAction,
    likeAnArticle,
    dislikeAnArticle,
  })(SingleArticles);
