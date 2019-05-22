import ratingsReducer from '../../reducers/ratingsReducers';
import {
  RATING_STARTED,
  RATING_SUCCESSFUL,
  RATING_FAILED,
} from '../../actions/types';

describe('Ratings reducer', () => {
  it('should return correct state for successful article fetch action', () => {
    const expectedState = {
      error: null,
      successMsg: null,
    };

    const action = {
      type: RATING_STARTED,
    };

    expect(ratingsReducer({}, action)).toEqual(expectedState);
  });

  it(' should return correct state for successful article fetch', () => {
    const expectedState = {
      successMsg: 'dorotia',
    };

    const action = {
      type: RATING_SUCCESSFUL,
      data: 'dorotia',
    };

    expect(ratingsReducer({}, action)).toEqual(expectedState);
  });
  it(' should return an error action', () => {
    const expectedState = {
      error: '',
    };

    const action = {
      type: RATING_FAILED,
      err: '',
    };

    expect(ratingsReducer({}, action)).toEqual(expectedState);
  });

  it('should return for no action', () => {
    const expectedState = {};

    const action = {
      type: 'INVALID',
      payload: {},
    };

    expect(ratingsReducer({}, action)).toEqual(expectedState);
  });
});
