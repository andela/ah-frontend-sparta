import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { userRating } from '../../../actions/ratingActions';

jest.mock('react-notify-toast');
describe('User rating', () => {
  const ratingData = {
    ratings: 2,
  };
  const WrongRatingData = {
    ratings: {},
  };
  const mockStore = configureMockStore([thunk]);
  let store = '';

  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('A user rates an article successfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          ratings: '4',
          author: 3,
          rated_on: '2019-04-16T15:14:19.516056+03:00',
          article: 1,
        },
      });
    });
    const expectedAction = [
      { type: 'RATING_STARTED' },
      {
        type: 'RATING_SUCCESSFUL',
        data:
      {
        ratings: '4',
        author: 3,
        rated_on: '2019-04-16T15:14:19.516056+03:00',
        article: 1,
      },
      }];

    return store.dispatch(userRating(ratingData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
