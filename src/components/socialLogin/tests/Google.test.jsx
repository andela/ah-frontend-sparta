import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GoogleButton from '../GoogleButton';
import SignUpPage from '../../../pages/Signup/index';

describe('Google sign in', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(<GoogleButton />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe('Signup', () => {
  it('should should render correctly', () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
