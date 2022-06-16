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

export function fetchArticle(article_id) {
	return shoutValleyApi.get(`/articles/${article_id}`).then(({data}) => {
		return data.article;
	});
};

export function fetchTopics() {
	return shoutValleyApi.get(`/topics`).then(({ data }) => {
		return data.topics;
	});
}

export function fetchComments(article_id) {
	return shoutValleyApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
		return data.comments;
	});
}

export function postComment(article_id, body, username) {
	console.table({article_id, body, username});
	return shoutValleyApi.post(`/articles/${article_id}/comments`, {username, body}).catch((e)=>{console.log(e.response.data.msg)});
}

export function addVote(article_id, inc_votes) {
	return shoutValleyApi.patch(`/articles/${article_id}`, {inc_votes});

}
