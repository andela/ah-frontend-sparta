import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from '../../components/Ratings';
import { userRating } from '../../actions/ratingActions';

export class RatingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: 1,
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ ratings: nextValue });
  };

    onSubmit = () => {
      const { slug } = this.props;
      const ratingData = { ratings: this.state.ratings };
      this.props.userRating(ratingData, slug);
    };

    render() {
      const { ratings } = this.state;
      return (
        <div>
          <Rating
            name="rate1"
            starCount={5}
            value={ratings}
            onStarClick={this.onStarClick}
            rating={ratings}
            onSubmit={this.onSubmit}
          />

        </div>
      );
    }
}
export const mapStateToProps = state => (
  { ratingReducer: state.ratingReducer }
);
export default connect(mapStateToProps, { userRating })(RatingContainer);
