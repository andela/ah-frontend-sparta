import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { Landing } from '../index';
import { data } from '../../../reducers/tests/fixtures/moxios_mock';

describe('Landing page', () => {
  const initialState = {
    articles: data.articles.article.results,
  };
  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const props = {
    articles: [],
    getArticles: jest.fn(),
    fetchNext: jest.fn(),
    fetchOriginal: jest.fn(),
    firstarticles: [],
    paginatearticles: [],
    pageState: { next: null, prev: null },
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Landing {...props} />
      </Provider>,
    );
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount Method Called', () => {
    const spy = jest.spyOn(Landing.prototype, 'componentDidMount');
    mount(<Landing {...props} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('landing should get data', () => {
    const wrapper2 = shallow(<Landing {...props} />);
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper2.instance().fetchData(event);
    // console.log(wrapper2.instance().props);
    expect(wrapper2.instance().props.fetchNext).toBeCalled();
  });

  it('landing should get next', () => {
    const wrapper2 = shallow(<Landing {...props} />);
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper2.instance().fetchPrevious(event);
    expect(wrapper2.instance().props.fetchNext).toBeCalled();
  });
});
