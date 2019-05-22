import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Comment from './index';

describe('Comment Component test', () => {
  const props = {
    commentObject: {
      author: 'alex',
      body: 'this is alex',
      createdAt: '1133',
      id: 1,
      replies: ['hi'],
    },
    showReplies: jest.fn(),
    replyDisplayState: {},
    slug: 'hi',
    postReplyToComment: jest.fn(),
    deleteComment: jest.fn(),
    updateComment: jest.fn(),
    onChangeComment: jest.fn(),
  };

  const wrapper = shallow(<Comment {...props} />);

  it('replyButton test', () => {
    wrapper.find('#deleteButton').simulate('click');
    wrapper.find('.replyButton').simulate('click');
    wrapper.setProps({
      commentObject: { ...props.commentObject, replies: ['li', 'hey'] },
    });
    wrapper.find('.replyButton').simulate('click');
    wrapper.setProps({
      commentObject: { ...props.commentObject, replies: [] },
    });
    wrapper.find('.replyButton').simulate('click');
    expect(props.deleteComment).toHaveBeenCalled();
  });

  it('replies map function test', () => {
    const replyProps = {
      key: 1,
      reply: {},
      slug: 'article-slug',
      id: 1,
      deleteComment: jest.fn(),
      updateComment: jest.fn(),
      onChangeComment: jest.fn(),
    };
    wrapper.setProps({ repliesDisplayState: { repliesDisplayState1: true } });
    wrapper.setProps({
      commentObject: { ...props.commentObject, replies: [] },
    });
  });
});
