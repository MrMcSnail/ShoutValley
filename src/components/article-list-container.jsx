import { useState, useEffect } from "react";
import ArticleCard from "./article-card";
import { fetchArticles } from "../utils/api";
import { useSearchParams, useParams } from "react-router-dom";

export default function ArticleListContainer() {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchParams] = useSearchParams()


	useEffect(() => {
		setIsLoading(true);
			fetchArticles(searchParams)
			.then((returnedArticles) => {
				setArticles(returnedArticles);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setError({ err: `Somethings gone wrong.` });
			});
		}, [searchParams]);

	const articleList = articles.map((article) => {
		return <ArticleCard key={article.article_id} article={article} />;
	});

	if (error) {
		return <h2>{error.err}</h2>;
	} else {
		return isLoading ? (
			<h2 className='loading-tag'>Loading</h2>
		) : (
			<ul className='article-list'>{articleList}</ul>
		);
	}
}
