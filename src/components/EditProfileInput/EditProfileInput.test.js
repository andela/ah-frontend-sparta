import React from 'react';
import renderer from 'react-test-renderer';
import EditProfileInput from './index';

test('snapshot test', () => {
  const wrapper = renderer.create(<EditProfileInput />);
  expect(wrapper).toMatchSnapshot();
});
