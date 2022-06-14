import { useState, useEffect } from "react";
import ArticleCard from "./article-card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { fetchArticles } from "../utils/api";

export default function ArticleListContainer() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetchArticles()
			.then((returnedArticles) => {
				setArticles(returnedArticles);
			})
			.then(() => {
				setIsLoading(false);
			});
	}, []);

	const articleList = articles.map((article) => {
		return <ArticleCard key={article.article_id} article={article} />;
	});

	return isLoading ? (
		<h2 className="loading-tag">Loading</h2>
	) : (
		<ul className='article-list'>{articleList}</ul>
	);
}
