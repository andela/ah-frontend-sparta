import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-router-dom';
import { Navbar } from './index';

describe('navbar container', () => {
  let instance;
  let wrapper;
  const props = {
    history: {
      push: jest.fn(),
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
});
