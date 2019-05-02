import React from 'react';
import { shallow } from 'enzyme';
import { Signin as SigninContainer } from './index';

describe('signin container', () => {
  it('calls input handler', () => {
    const wrapper = shallow(<SigninContainer />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: 'rogha',
      },
    };
    instance.onChange(event);
  });

  it('calls submit handler', () => {
    const props = {
      loginUser: jest.fn(),
    };
    const wrapper = shallow(<SigninContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: 'rogha',
      },
    };
    event.preventDefault = jest.fn();
    instance.handleSubmit(event);
  });
});
