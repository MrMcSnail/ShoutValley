import axios from 'axios';

const shoutValleyApi = axios.create({
	baseURL: "https://shoutvalley.herokuapp.com/api",
});
// Order must be 'ASC' or 'DESC'.
export function fetchArticles(params) {
	const topic = params.get('topic')
	const sort_by = params.get('sort_by')
	const order = params.get('order')
	return shoutValleyApi.get(`/articles`, {params: {topic, sort_by, order }}).then(({ data }) => {
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

export const deleteComment = (comment_id) => {
	return shoutValleyApi.delete(`/comments/${comment_id}`).catch((e) => {
		console.log(e.response.data.msg);
	});
};

export function postComment(article_id, body, username) {
	return shoutValleyApi.post(`/articles/${article_id}/comments`, {username, body}).catch((e)=>{console.log(e.response.data.msg)});
};

export function addVote(article_id, inc_votes) {
	return shoutValleyApi.patch(`/articles/${article_id}`, {inc_votes});
};

export function fetchUsers() {
	return shoutValleyApi.get(`/users`).then(({ data }) => {
		return data.users;
	});
}
