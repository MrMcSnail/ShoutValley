import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../utils/api";


export default function ArticleContainer() {
  const [article, setArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
  const { article_id } = useParams();
	
  useEffect(() => {
		setIsLoading(true);
		fetchArticle(article_id).then((returnedArticle) => {
				setArticle(returnedArticle);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setError({ err: `Somethings gone wrong.` });
			});
	}, [article_id]);


  console.log('article: ', article);
  return (
  <article>
    <h2>{article.title}</h2>
    
  </article>)
}
