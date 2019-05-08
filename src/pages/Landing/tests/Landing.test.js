import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store';
import { Landing } from '../index.js';

describe('Landing page', () => {
	const props = {
		articles: [],
		fetchArticles: jest.fn()
	};
	it('should render without crashing', () => {
		const wrapper = renderer.create(
			<Provider store={store}>
				<Landing {...props} />
			</Provider>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});
});
