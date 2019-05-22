import profileReducer from '../../reducers/profileReducer';
import * as types from '../../actions/types';

describe('Profile reducer', () => {
  const initialState = {
    error: '',
    user: {},
  };

  it('should handle USER', () => {
    const dispatchedAction = {
      type: types.USER,
      payload: {},
    };
    const newState = {
      error: '',
      user: {},
    };

    expect(profileReducer(newState, dispatchedAction)).toEqual(initialState);
  });
  it('should handle ERROR', () => {
    const dispatchedAction = {
      type: types.ERROR,
      payload: '',
    };
    const newState = {
      error: '',
      user: {},
    };

    expect(profileReducer(newState, dispatchedAction)).toEqual(initialState);
  });
});
