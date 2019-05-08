import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleContainer from '../../components/Articles/ArticleContainer';
import LandingImage from '../../assets/images/landing_image.jpg';
// import ArticleData from '../../data/sample_articles.js';
import { fetchArticles } from '../../actions/articlesActions';

import './Landing.scss';

export class Landing extends Component {
	componentDidMount = () => {
		this.props.fetchArticles();
	};

	render() {
		return (
			<div>
				<div className='page-banner-image'>
					<img className='LandingImage' src={LandingImage} alt='Landing image' />
				</div>
				<div className='small-screen'>
					<div>
						<form>
							<input type='text' placeholder='SEARCH' />
						</form>
					</div>
					<div>
						<a href='/login'>Account</a>
					</div>
				</div>
				<ArticleContainer articles={this.props.articles} />
				<br />
				<br />
				<br />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	articles: state.articles
});

export default connect(mapStateToProps, { fetchArticles })(Landing);
