import React from 'react';
import { shallow } from 'enzyme';
import { EditProfile as EditProfileContainer, mapStateToProps } from './index';

describe('EditProfile container', () => {
  const updateProfile = jest.fn();
  const props = {
    updateProfile,
    fetchProfile: jest.fn(),
    saveImage: jest.fn(),
  };
  const wrapper = shallow(<EditProfileContainer {...props} />);
  const instance = wrapper.instance();

  it('calls input handler', () => {
    const event = {
      target: {
        id: 'rogha',
      },
    };
    instance.onChange(event);
  });

  it('calls handleSubmit', () => {
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect(updateProfile).toHaveBeenCalled();
  });

  it('Profile mapStateToProps', () => {
    const appState = {
      profile: {
        user: {
          username: 'ezrogha',
          firstname: 'Rogha',
          lastname: 'timbi',
          bio: 'blah blah',
          image: 'picture',
        },
      },
    };

    const componentState = {
      profile: {
        bio: 'blah blah',
        firstname: 'Rogha',
        image: 'picture',
        lastname: 'timbi',
        username: 'ezrogha',
      },
    };
    expect(mapStateToProps(appState)).toEqual(componentState);
  });
});
