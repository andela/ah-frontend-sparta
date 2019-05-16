import React from 'react';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { ResetPasswordContainer, mapStateToProps } from
  '../../pages/PasswordReset/ResetPasswordContainer';
import { PasswordReset } from '../../pages/PasswordReset';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  resetReducer: {
    message: '',
    error: '',
  },
};
const store = mockStore(initialState);
const props = {
  resetPassword: jest.fn(),
  changePassword: jest.fn(),
  match: jest.fn(),

};
const wrapper1 = renderer.create(
  <Provider store={store}>
    <ResetPasswordContainer {...props} />
  </Provider>,
);
const wrapper2 = renderer.create(
  <Provider store={store}>
    <PasswordReset {...props} />
    ,
  </Provider>,
);
it('should render without crashing', () => {
  expect(wrapper1).toMatchSnapshot();
});

it('should handle change', () => {
  const wrapper = shallow(
    <ResetPasswordContainer {...props} />,
  );
  const instance = wrapper.instance();
  instance.onChange({ target: { name: 'email', value: 'dorothy@gmail.com' } });
  expect(instance.state.email).toEqual('dorothy@gmail.com');
});

it('should map state to props', () => {
  const state = {
    email: '',
  };
  expect(mapStateToProps(state)).toEqual({
    email: '',
  });
});
it('should handle click', () => {
  const wrapper = shallow(
    <ResetPasswordContainer {...props} />,
  );
  const instance = wrapper.instance();
  instance.handleClick({ preventDefault: jest.fn() });
  expect(props.resetPassword).toHaveBeenCalled();
});

it('should have default props resetPassword', () => {
  expect(ResetPasswordContainer.defaultProps.resetPassword).toBeDefined();
});
it('should render without crashing ', () => {
  expect(wrapper2).toMatchSnapshot();
});
