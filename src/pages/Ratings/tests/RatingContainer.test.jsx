import React from 'react';
import { mount, shallow } from 'enzyme';
import { RatingContainer } from '../index';

describe('User rating', () => {
  const props = {
    name: 'rate1',
    starCount: 5,
    value: 0,
    onStarClick: jest.fn(),
    rating: 0,
  };
  const ratingData = {
    ratings: 2,
  };

  const WrongRatingData = {
    ratings: {},
  };

  it('maps State To Props', () => {
    mount(<RatingContainer {...props} />);
  });

  it('onStarClick updates rating in state', () => {
    const props2 = {
      userRating: jest.fn(),
    };
    const wrapper = shallow(<RatingContainer {...props2} />);
    const instance = wrapper.instance();
    instance.onStarClick(2, 1, 'rate1');
    expect(instance.state.ratings).toBe(2);
  });
  it('onSubmit submits the data', () => {
    const props2 = {
      userRating: jest.fn(),
    };
    const wrapper = shallow(<RatingContainer {...props2} />);
    const instance = wrapper.instance();
    instance.onSubmit();
    expect(instance.state.ratings).toBe(1);
  });
});
