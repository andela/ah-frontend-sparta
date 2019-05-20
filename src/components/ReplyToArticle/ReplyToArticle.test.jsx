import React from 'react';
import renderer from 'react-test-renderer';
import ReplyToArticle from './index';

test('ReplyToArticle test', () => {
  const wrapper = renderer.create(<ReplyToArticle />);
  expect(wrapper).toMatchSnapshot();
});
