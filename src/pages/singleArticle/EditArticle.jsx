import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TagList from '../../helpers/TagList';
import EditArticleComponent from '../../components/Articles/editArticle';
import getArticleTags from '../../helpers/handleArticleTags';
import { getSingleArticle, editSingleArticle } from '../../actions/articlesActions';


const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export class EditArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [
      ],
      title: '',
      description: '',
      body: '',
      Articleslug: '',
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getArticle } = this.props;
    const { slug } = this.props.match.params;
    this.setState({
      Articleslug: slug,
    });
    getArticle(slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const {
        title, description, body, tags,
      } = nextProps.article.article;
      const tagsArray = [];
      tags.map(tag => tagsArray.push({ id: tag, text: tag }));
      this.setState({
        tags: tagsArray,
      });
      this.setState({
        title, description, body,
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { updateArticle, history } = this.props;
    const articleTags = this.state.tags;
    const tags = getArticleTags(articleTags);
    const { title, description, body } = this.state;
    updateArticle({
      title, description, body, tags,
    }, this.props, this.state.Articleslug);
  }

    handleChange = (event) => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    handleDelete(i) {
      const { tags } = this.state;
      this.setState({
        tags: tags.filter((tag, index) => index !== i),
      });
    }

    handleAddition(tag) {
      this.setState(state => ({ tags: [...state.tags, tag] }));
    }


    render() {
      const { title, description, body } = this.state;
      const { tags } = this.state;
      const suggestedTags = TagList.map(tag => ({
        id: tag,
        text: tag,
      }));
      return (
        <EditArticleComponent
          tags={tags}
          delimiters={delimiters}
          suggestions={suggestedTags}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          title={title}
          description={description}
          body={body}
        />
      );
    }
}

EditArticle.defaultProps = {
  slug: '',
  article: PropTypes.shape(PropTypes.object.isRequired),
  match: PropTypes.shape(PropTypes.object.isRequired),
};

EditArticle.propTypes = {
  getArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
  slug: PropTypes.string,
  article: PropTypes.shape(PropTypes.object.isRequired),
  match: PropTypes.shape(PropTypes.object.isRequired),
};

const mapStateToProps = state => ({
  article: state.article,
});
export default connect(mapStateToProps,
  { getArticle: getSingleArticle, updateArticle: editSingleArticle })(EditArticle);
