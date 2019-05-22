import React from 'react';
import './EditCommentDialog.scss';

const EditCommentDialog = ({ comment, updateComment, onChangeComment, id }) => (
  <div
    className="modal fade"
    id="exampleModalCenter"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Edit Comment
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
          <form>
            <div className="form-group">
              <textarea
                name="commentToArticle"
                className="form-control"
                onChange={onChangeComment}
                defaultValue={comment}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            id="updateButton"
            type="button"
            className="btn btn-primary updateComment"
            data-dismiss="modal"
            onClick={() => updateComment(id)}
          >
            Update Comment
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default EditCommentDialog;
