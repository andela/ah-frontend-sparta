import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './index';

test('Comments snapshot test', () => {
  const props = {
    comments: [],
    showReplies: jest.fn(),
    replyDisplayState: jest.fn(),
    slug: 'comments-slug',
    postReplyToComment: jest.fn(),
    onCommentChanged: jest.fn(),
    postComment: jest.fn(),
    deleteComment: jest.fn(),
    updateComment: jest.fn(),
    onChangeComment: jest.fn(),
  };
  const wrapper = renderer.create(<Comments {...props} />);
  expect(wrapper).toMatchSnapshot();
});
