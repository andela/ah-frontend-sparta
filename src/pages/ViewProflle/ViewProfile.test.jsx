import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, ViewProfile } from './index';

describe('ViewProfile container', () => {
  let wrapper;
  const fetchProfile = jest.fn();
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

  it('Should get profile', () => {
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
    wrapper = shallow(
      <ViewProfile fetchProfile={fetchProfile} profile={appState} />,
    );
    wrapper.find('ViewProfile').find('#image');
    expect(fetchProfile.mock.calls.length).toBe(1);
  });
});
