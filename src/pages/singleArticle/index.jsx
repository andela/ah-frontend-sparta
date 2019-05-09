import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleDetail from '../../components/Articles/ArticleDetail';
import { getSingleArticle } from '../../actions/articlesActions';

export class SingleArticles extends React.Component {
  componentDidMount() {
    const { getArticle } = this.props;
    const { slug } = this.props.match.params;
    getArticle(slug);
  }

  render() {
    const { article } = this.props;
    return (
      <ArticleDetail article={article.article} />
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
  { getArticle: getSingleArticle })(SingleArticles);
