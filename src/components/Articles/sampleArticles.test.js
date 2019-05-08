import React from 'react';
import { mount } from 'enzyme';
import SampleArticles from './index';
import Article from '../../data/sample_articles.js'

describe('Sample Articles Component', () => {
	let mountApp;
	const props = {
		articles: [
			{
				id: 1,
				author: {
					username: 'rogha',
					firstname: null,
					lastname: null,
					bio: null,
					image: null,
					followers_no: 1,
					following_no: 0
				},
				article_read_time: 'less than a minute read',
				favorite: [],
				share_article_links: {
					facebook:
						'https://www.facebook.com/sharer/sharer.php?u=https%3A//ah-backend.herokuapp.com/api/articles/post-one-first',
					twitter:
						'https://twitter.com/home?status=https%3A//ah-backend.herokuapp.com/api/articles/post-one-first',
					googleplus:
						'https://plus.google.com/share?url=https%3A//ah-backend.herokuapp.com/api/articles/post-one-first',
					email:
						'mailto:?&subject=Post%20one&body=Post%20one%0A%0Ahttps%3A//ah-backend.herokuapp.com/api/articles/post-one-first'
				},
				average_rating: null,
				title: 'Post one',
				description: 'too long a story',
				slug: 'post-one-first',
				body: 'ahhhhh --edit me',
				createdAt: '2019-04-18T11:55:58.111843Z',
				updatedAt: '2019-04-18T11:55:58.111902Z',
				tags: [],
				likes: 0,
				dislikes: 0
			}
		]
	};
	beforeEach(() => {
		mountApp = mount(<SampleArticles {...props} />);
	});

	it('Should render without crashing', () => {
		expect(mountApp).toMatchSnapshot();
	});
});
