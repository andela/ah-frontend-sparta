import React from 'react';
import moment from 'moment';
import BookmarkImage from '../../assets/images/bookmark.png';

const getRandomArticles = (count, articlesArray) => {
	// Make a copy of the array
	const temporaryArray = articlesArray.slice(articlesArray);
	const returned_array = [];

	for (var i = 0; i < count; i++) {
		var index = Math.floor(Math.random() * temporaryArray.length);
		var removed = temporaryArray.splice(index, 1);
		// Since we are only removing one element
		returned_array.push(removed[0]);
	}
	return returned_array;
};

const TrendingArticles = (props) => {
	const { articles } = props;
	const randomArray = getRandomArticles(5, articles);
	return (
		<div>
			<h1>Trending</h1>
			<br />
			<hr />
			<br />
			{articles.length > 0 ? (
				randomArray.map((article) => {
					let article_date = moment(article.createdAt.slice(0, 10)).format('LL');
					return (
						<div className='trending' key={article.id}>
							<div className='trending-articles'>
								<h4>{article.title}</h4>
								<p className='author_name'>
									Created By <b>{article.author.username}</b>
								</p>
								<h6>
									{article_date} - {article.article_read_time}
								</h6>
							</div>
							<div className='book-mark-holder'>
								<img src={BookmarkImage} className='bookmark-image' />
							</div>
							<br />
						</div>
					);
				})
			) : (
				<div>No Trending Articles where Found !!!!</div>
			)}
		</div>
	);
};

export default TrendingArticles;
