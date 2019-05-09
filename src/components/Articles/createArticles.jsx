import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import PropTypes from 'prop-types';
import './article.scss';


const createArticles = (

  {
    tags,
    handleDelete,
    handleAddition,
    delimiters,
    onSubmit,
    handleChange,
    title,
    description,
    body,
  },

) => (
  <div className="container">
    <br />
    <br />
    <br />
    <div className="row">
      <div className="col-md-1" />
      <div className="col-md-10" style={{ paddingLeft: '20px' }}>
        <h4 className="article-heading">Create Article</h4>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label
              id="article-title"
              htmlFor="title"
              className="control-label col-md-12 col-sm-12 col-xs-12"
              style={{ color: '#8D8D8D' }}
            >
              Article Title :
              <br />
              <br />
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter Article Title"
                value={title}
                onChange={handleChange}
                style={{ height: '50px', backgroundColor: '#F3F3F3' }}
              />
            </label>
            <br />
            <br />
            <br />
            <label
              id="article-description"
              htmlFor="description"
              className="control-label col-md-12 col-sm-12 col-xs-12"
              style={{ color: '#8D8D8D' }}
            >
              Article Description :
              <br />
              <br />
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                placeholder="Enter Article Description"
                value={description}
                onChange={handleChange}
                style={{ height: '80px', backgroundColor: '#F3F3F3' }}
              />
            </label>
            <br />
            <br />
            <br />
            <label
              id="article-body"
              htmlFor="body"
              className="control-label col-md-12 col-sm-12 col-xs-12"
              style={{ color: '#8D8D8D' }}
            >
              Article Body :
              <br />
              <br />
              <textarea
                type="text"
                className="form-control"
                id="body"
                name="body"
                aria-describedby="article"
                placeholder="Enter Article Body"
                value={body}
                onChange={handleChange}
                style={{ height: '200px', backgroundColor: '#F3F3F3' }}
              />
            </label>
            <br />
            <br />
            <br />
            <ReactTags
              tags={tags}
              placeholder="Tag An Article"
              classNames={{
                border: '2px solid red',
              }}
              inline={false}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              delimiters={delimiters}
            />
            <br />
            <br />
            <br />
            <div className="control-label col-md-12 col-sm-12 col-xs-12">
              <button type="submit" className="btn post-button">Post</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-1" />
    </div>
  </div>
);
createArticles.defaultProps = {
  tags: [],
  delimiters: [],
  title: '',
  description: '',
  body: '',

};
createArticles.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
  delimiters: PropTypes.arrayOf(PropTypes.number),
  handleDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddition: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,

};

export default createArticles;
