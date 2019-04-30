import React from 'react';
import renderer from 'react-test-renderer';
import Landing from '../components/Landing';

describe('Landing page', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(<Landing />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
