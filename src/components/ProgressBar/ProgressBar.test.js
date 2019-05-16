import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './index';

test('snapshot test', () => {
  const wrapper = renderer.create(<ProgressBar />);
  expect(wrapper).toMatchSnapshot();
});
