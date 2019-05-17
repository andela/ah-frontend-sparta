import React from 'react';
import './article.scss';

const deleteArticleModal = () => (
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
          Modal title
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
          Delete Article
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
          >
          Cancel

          </button>
          <button
            type="button"
            className="btn btn-danger"
          >
          Ok
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default deleteArticleModal;
