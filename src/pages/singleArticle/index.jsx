import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticleDetail from '../../components/Articles/ArticleDetail';
import {
  getSingleArticle,
  deleteSingleArticle,
} from '../../actions/articlesActions';

export class SingleArticles extends React.Component {
  componentDidMount() {
    const { getArticle } = this.props;
    const { slug } = this.props.match.params;
    getArticle(slug);
  }

  deleteAnArticle = (slug) => {
    const { deleteArticle } = this.props;
    deleteArticle(slug, this.props);
    document.getElementById(`cancelModal${slug}`).click();
  }

  render() {
    const { article } = this.props;
    return (
      <ArticleDetail article={article.article} deleteAnArticle={this.deleteAnArticle} />
    );
  }
}

SingleArticles.defaultProps = {
  slug: '',
  article: PropTypes.shape(PropTypes.object.isRequired),
  match: PropTypes.shape(PropTypes.object.isRequired),
};

SingleArticles.propTypes = {
  getArticle: PropTypes.func.isRequired,
  slug: PropTypes.string,
  article: PropTypes.shape(PropTypes.object.isRequired),
  match: PropTypes.shape(PropTypes.object.isRequired),
};

const mapStateToProps = state => ({
  article: state.article,
});

export default connect(mapStateToProps,
  {
    getArticle: getSingleArticle,
    deleteArticle: deleteSingleArticle,
  })(SingleArticles);
