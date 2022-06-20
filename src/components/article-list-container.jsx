import { useState, useEffect } from "react";
import ArticleCard from "./article-card";
import { fetchArticles } from "../utils/api";
import { useSearchParams } from "react-router-dom";


export default function ArticleListContainer() {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchParams] = useSearchParams();
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		console.log('rendering')
		setIsLoading(true);
		fetchArticles(searchParams)
			.then((returnedArticles) => {
				setArticles(returnedArticles);
			})
			.then(() => {
				setIsLoading(false);
			
			})
			.catch((err) => {
				setError({ err: `Something's gone wrong. Please refresh the page.` });
			});
	}, [searchParams]);
	const articleList = articles.map((article) => {
			return <ArticleCard key={article.article_id} article={article} />;
		});

	if (error) {
		return <h2 className="card">{error.err}</h2>;
	} else {
		return isLoading ? (
			<h2 className='loading-tag'>Loading</h2>
		) : (
			<section className="article-list-container">
				<ul className='article-list'>{articleList}</ul>
			</section>
		);
	}
}
