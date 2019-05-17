import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from '../../../store';
import { SingleArticles } from '../index';

describe('Single Article page', () => {
    const props = {
        articles: [],
        getArticle: jest.fn(),
        match: {
            params: {
                slug: 'new-slug',
            }
        }
        
    };
    let instance;
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <SingleArticles {...props} />
            </Provider>,
        );
    });

    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('componentDidMount Method Called', () => {
        const spy = jest.spyOn(SingleArticles.prototype, 'componentDidMount');
        mount(<SingleArticles {...props} />);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
