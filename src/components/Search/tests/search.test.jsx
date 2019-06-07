import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

describe('Search page', () => {
  it('should render without failing', () => {
    const wrapper = renderer.create(<Search />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
