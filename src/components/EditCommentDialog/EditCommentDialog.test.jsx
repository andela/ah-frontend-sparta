import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditCommentDialog from './index';

test('snapshot test', () => {
  const props = {
    updateComment: jest.fn(),
  }
  const wrapper = shallow(<EditCommentDialog {...props} />);
  wrapper.find('#updateButton').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
