import React from 'react';
import renderer from 'react-test-renderer';
import Starter from '../components/Starter';

describe('Render dummy starter page from JSONPlaceholder', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(<Starter />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
