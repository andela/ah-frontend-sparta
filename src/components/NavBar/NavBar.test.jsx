import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-router-dom';
import Navbarz, { Navbar } from './index';

describe('navbar container', () => {
  let instance;
  let wrapper;
  const props = {
    history: {
      push: jest.fn(),
      getSearch: jest.fn(),
    },
  };
  beforeEach(() => {
    wrapper = shallow(<Navbar props={props} />);
    instance = wrapper.instance();
  });

  it('should call logout method', () => {
    const spyLogout = jest.spyOn(instance, 'logout');
    instance.logout();
    expect(spyLogout).toHaveBeenCalled();
  });
  it('changes state', () => {
    wrapper.setState({ query: 'hello' });
    const state = wrapper.state();
    expect(state.query).toEqual('hello');
  });
  it('should handle search', () => {
    const propss = {
      getSearch: jest.fn(),
    };
    const component = shallow(<Navbar {...propss} />);
    const spy = jest.spyOn(component.instance(), 'handleSearch');
    const event = { preventDefault: jest.fn() };
    component.instance().handleSearch(event);
    expect(spy).toHaveBeenCalled();
  });
  it('should handle change', () => {
    const propss = {
      getSearch: jest.fn(),
    };
    const component = shallow(<Navbar {...propss} />);
    const spy = jest.spyOn(component.instance(), 'handleChange');
    component.setState({ query: 'hello' });
    const event = { preventDefault: jest.fn(), target: { name: 'hello' } };
    component.instance().handleChange(event);
    expect(spy).toHaveBeenCalled();
    // component.instance().handleSearch(event);
  });
});
