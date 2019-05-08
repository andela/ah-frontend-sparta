import React from 'react';
import SampleArticles from './index';
import TrendingArticles from './TrendingArticles';

const ArticleContainer = (props) => {
	return (
		<div className='wrapper'>
			<SampleArticles articles={props.articles} />
			<TrendingArticles articles={props.articles} />
		</div>
	);
};

export default ArticleContainer;
