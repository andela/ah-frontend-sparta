import React from 'react';
import renderer from 'react-test-renderer';
import InputBox from './index';

test('snapshot test', () => {
  const wrapper = renderer.create(<InputBox />);
  expect(wrapper).toMatchSnapshot();
});
