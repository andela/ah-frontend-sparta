import React from 'react';
import renderer from 'react-test-renderer';
import { FaceBook, Google, Twitter } from './index';

test('FaceBook snapshot test', () => {
  const wrapper = renderer.create(<FaceBook />);
  expect(wrapper).toMatchSnapshot();
});

test('Google snapshot test', () => {
  const wrapper = renderer.create(<Google />);
  expect(wrapper).toMatchSnapshot();
});

test('Twitter snapshot test', () => {
  const wrapper = renderer.create(<Twitter />);
  expect(wrapper).toMatchSnapshot();
});
