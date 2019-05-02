import React from 'react';
import { shallow } from 'enzyme';
import FaceBookButton from '../faceBookButton';


describe('Facebook Button Tests', () => {
  it('should not regress', () => {
    const componentWrapper = shallow(<FaceBookButton />);
    const response = {
      accessToken: 'testToken',
    };
    componentWrapper.instance().responseFacebook(response);
  });

  it('snapshot test', () => {
    const componentWrapper = shallow(<FaceBookButton />);
    expect(componentWrapper).toMatchSnapshot();
  });
});
