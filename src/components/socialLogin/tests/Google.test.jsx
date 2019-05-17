import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GoogleButton from '../GoogleButton';
import SignUpPage from '../../../pages/Signup/index';

describe('Google sign in', () => {
  it('should render without crashing', () => {
    const responseGoogle = {
      user_token: {
        auth_token: 'test_token',
      },
    };
    const wrapper = renderer.create(
      <GoogleButton responseGoogle={responseGoogle} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe('Signup', () => {
  it('should should render correctly', () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
