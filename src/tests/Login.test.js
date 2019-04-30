import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../components/Login';

describe('Login Page', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(<Login />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
