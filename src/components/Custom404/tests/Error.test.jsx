import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Error from '../Error';

describe('Error page', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<MemoryRouter><Error /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
  });
});
