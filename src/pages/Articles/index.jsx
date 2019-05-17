import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import countries from './countries';
import CreateArticles from '../../components/Articles/createArticles';
import { postArticle } from '../../actions/articlesActions';
import getArticleTags from '../../helpers/handleArticleTags';


const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


export class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
      ],
      title: '',
      description: '',
      body: '',
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { addArticle, history } = this.props;
    const articleTags = this.state.tags;
    const tags = getArticleTags(articleTags);
    const { title, description, body } = this.state;
    addArticle({
      title, description, body, tags,
    }, history);
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
    const suggestedContries = countries.map(country => ({
      id: country,
      text: country,
    }));
    return (
      <div>
        <CreateArticles
          tags={tags}
          suggestions={suggestedContries}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          title={title}
          description={description}
          body={body}
        />
      </div>
    );
  }
}
Articles.propTypes = {
  addArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(null, { addArticle: postArticle })(withRouter(Articles));
