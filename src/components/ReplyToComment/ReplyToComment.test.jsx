import React from 'react';
import { shallow } from 'enzyme';
import ReplyToComment, { textAreaChanged } from './index';

test('snapshot test', () => {
  const props = {
    postReplyToComment: jest.fn(),
  };
  const wrapper = shallow(<ReplyToComment {...props} />);
  wrapper.find('.commentReplyButtn').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

test('ReplyToComment textAreaChanged function test', () => {
  const event = {
    target: {
      value: 'rogha',
    },
  };
  textAreaChanged(event);
});
