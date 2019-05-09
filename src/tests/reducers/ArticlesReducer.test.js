import GET_ARTICLES from '../../actions/types';
import articlesReducer from '../../reducers/articlesReducer';

describe('Articles Reducer', () => {
  it('Should return a  new state if receiving a type', () => {
    const initialState = [];
    const expectation = [];
    const action = {
      type: GET_ARTICLES,
      payload: [],
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });
});
