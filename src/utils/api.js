import axios from 'axios';

const shoutValleyApi = axios.create({
	baseURL: "https://shoutvalley.herokuapp.com/api",
});

export function fetchArticles() {
  return shoutValleyApi.get(`/articles`).then(({data})=> {
    return data.articles;
  })
}