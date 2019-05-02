import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from '../pages/Landing';

describe('Landing page', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(<Router><Landing /></Router>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
