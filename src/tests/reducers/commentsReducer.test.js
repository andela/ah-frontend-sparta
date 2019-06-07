import * as types from '../../actions/types';
import searchReducer from '../../reducers/searchReducer';

describe('comments reducer', () => {
  it('should get payload', () => {
    const initialState = {
      comments: [],
    };
    const action = {
      type: types.FETCH_COMMENTS,
      payload: [],
    };
    const newState = searchReducer(initialState, action);
    expect(newState).toEqual({ comments: [] });
  });
});
