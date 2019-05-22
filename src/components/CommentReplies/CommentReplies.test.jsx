import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CommentReplies from './index';

test('CommentReplies snapshot test', () => {
  const props = {
    reply: {
      id: 1,
      body: 'Hi',
      author: 'Rogha',
      createdAt: '12:35',
    },
    slug: 'comment-slug',
    deleteComment: jest.fn(),
    updateComment: jest.fn(),
    onChangeComment: jest.fn(),
  };
  const wrapper = shallow(<CommentReplies {...props} />);
  wrapper.find('#deleteButton').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
