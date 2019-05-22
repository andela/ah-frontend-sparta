import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Rating = props => (
  <div>
    <a
      className="ratingButton"
      data-toggle="modal"
      data-target="#exampleModalCenter"
      href="#modal1"
    >
    Rate This Article
    </a>
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
            <h5 className="modal-title rating-title" id="exampleModalLongTitle">
              Your Rating is
              {' '}
              {' '}
              {props.rating}
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
            <div className="form-group rating-comp">
              <StarRatingComponent
                name={props.name}
                starCount={props.starCount}
                value={props.value}
                onStarClick={props.onStarClick}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-secondary pagButton"
              data-dismiss="modal"
              onClick={props.onSubmit}
            >
            Submit
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Rating;
