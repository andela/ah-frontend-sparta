import React from 'react';
import './article.scss';

const deleteArticleModal = ({ title, slug, deleteAnArticle }) => (
  <div
    className="modal fade"
    id="deleteArticleModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="deleteArticleModal"
    aria-hidden="true"
  >
    <div
      className="modal-dialog custom-model-dialog"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5
            className="modal-title"
            id="exampleModalLabel"
          >
          Delete Article
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Are you sure , you want to delete ?
          <br />
          <b className="delete-article-title">
            Title :
            {' '}
            {title}
          </b>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
            id={`cancelModal${slug}`}
          >
          Cancel

          </button>
          <button
            type="button"
            id="DeleteArticleBtn"
            className="btn btn-danger"
            onClick={() => {
              deleteAnArticle(slug);
            }}
          >
          Ok
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default deleteArticleModal;
