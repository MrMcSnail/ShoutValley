import axios from 'axios';

const shoutValleyApi = axios.create({
	baseURL: "https://shoutvalley.herokuapp.com/api",
});

export function fetchArticles(params) {
	const topic = params.get('topic')
	return shoutValleyApi.get(`/articles`, {params: {topic}}).then(({ data }) => {
		return data.articles;
	});
}

export function fetchTopics() {
	return shoutValleyApi.get(`/topics`).then(({ data }) => {
		return data.topics;
	});
}