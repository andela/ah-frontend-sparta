import { GET_ARTICLES } from './types';
import axios from 'axios';

export const fetchArticles = () => (dispatch) => {
	return axios.get('https://ah-backend.herokuapp.com/api/articles/').then((response) => {
		dispatch({
			type: GET_ARTICLES,
			payload: response.data.results
		});
	});
};
