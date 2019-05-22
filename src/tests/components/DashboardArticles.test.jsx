import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardArticles from '../../components/Articles/DashboardArticles';

describe('Dashboard Articles Component', () => {
  let mountApp;
  const props = {
    totalArticles: [

      {
        id: 1,
        author: {
          username: 'rogha',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 1,
          following_no: 0,
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
        dislikes: 0,
      },
      {
        id: 2,
        author: {
          username: 'rogha',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 1,
          following_no: 0,
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
        dislikes: 0,
      },
      {
        id: 3,
        author: {
          username: 'rogha',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 1,
          following_no: 0,
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
        dislikes: 0,
      },
      {
        id: 4,
        author: {
          username: 'rogha',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 1,
          following_no: 0,
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
        dislikes: 0,
      },
      {
        id: 5,
        author: {
          username: 'rogha',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 1,
          following_no: 0,
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
        dislikes: 0,
      },
      {
        id: 6,
        author: {
          username: 'rogha',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 1,
          following_no: 0,
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
        dislikes: 0,
      },
      {
        id: 7,
        author: {
          username: 'rogha',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 1,
          following_no: 0,
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
        dislikes: 0,
      },
    ],
  };
  beforeEach(() => {
    mountApp = renderer.create(
      <Router>
        <DashboardArticles {...props} />
      </Router>,
    );
  });

  it('Should render without crashing', () => {
    expect(mountApp).toMatchSnapshot();
  });
});
