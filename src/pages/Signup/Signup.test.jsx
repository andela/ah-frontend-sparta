import React from 'react';
import { shallow } from 'enzyme';
import { Signup as SignupContainer } from './index';

describe('sign in container', () => {
  it('calls input handler', () => {
    const wrapper = shallow(<SignupContainer />);
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
      signUpUser: jest.fn(),
    };
    const wrapper = shallow(<SignupContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: 'rogha',
      },
    };
    event.preventDefault = jest.fn();
    instance.handleSubmit(event);
  });

  it('output error when passwords donot match', () => {
    const props = {
      signUpUser: jest.fn(),
    };
    const wrapper = shallow(<SignupContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: 'rogha',
      },
    };
    event.preventDefault = jest.fn();
    instance.setState({
      password: '1234',
      confirmPassword: '123',
    });
    instance.handleSubmit(event);
  });
});
