import React from 'react';
import renderer from 'react-test-renderer';
import Landing from '../pages/Landing';

describe('Landing page', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(<Landing />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
