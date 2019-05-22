import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../helpers/axiosInstance';
import {
  fetchCommentsAction,
  replyToCommentAction
} from '../../actions/commentActions';
import * as types from '../../actions/types';

jest.mock('react-notify-toast');
describe('Testing Comments', () => {
  const middlewares = [thunk];

  const mockStore = configureMockStore(middlewares);

  beforeEach(() => moxios.install(axiosInstance));
  afterEach(() => moxios.uninstall(axiosInstance));

  it('Testing Fetching articles', () => {
    const expectedResponse = {
      id: 22,
      author: {
        username: 'Francis23',
        firstname: null,
        lastname: null,
        bio: null,
        image: null,
        followers_no: 0,
        following_no: 0,
      },
      title: 'DEMO FRIDAY',
      description: 'This is a demo where Franco was the spring lead',
      slug: 'demo-friday-21',
      body: 'This is the article body',
      createdAt: '2019-05-17T11:54:48.359368Z',
      updatedAt: '2019-05-17T11:54:48.359428Z',
      comments: [
        {
          id: 10,
          body: 'This is not my first comment',
          reply_count: 0,
          replies: [],
          createdAt: '2019-05-20T08:04:57.824695Z',
          author: {
            username: 'ezroghaa',
            firstname: null,
            lastname: null,
            bio: null,
            image: null,
            followers_no: 0,
            following_no: 0,
          },
        },
      ],
    };

    const expectedActions = [
      {
        type: types.FETCH_COMMENTS,
        payload: expectedResponse.comments,
      },
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    return store.dispatch(fetchCommentsAction('demo-friday-21')).then(() => {
      const dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(expectedActions);
    });
  });
});
