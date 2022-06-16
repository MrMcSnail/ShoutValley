import { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { fetchArticle } from "../utils/api";
import createTimestamp from "../utils/create-timestamp";
import CommentIcon from "@mui/icons-material/Comment";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TopicIcon from "@mui/icons-material/Topic";
import AddVotePip from "./vote-pip";

export default function ArticleContainer() {
	const [searchParams] = useSearchParams();
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const { article_id } = useParams();
	const { author, body, comment_count, created_at, title, topic, votes } =
		article;
	const dateData = new Date(created_at);

	useEffect(() => {
		setIsLoading(true);
		fetchArticle(article_id)
			.then((returnedArticle) => {
				setArticle(returnedArticle);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setError({ err: `Something's gone wrong.` });
			});
	}, [article_id, searchParams]);

	if (error) {
		return <h2>{error.err}</h2>;
	} else {
		return isLoading ? (
			<h2 className='loading-tag'>Loading</h2>
		) : (
			<div className='article'>
				<h2 className='article__title'>{title}</h2>

				<section className='article__subheading'>
					<NavLink to={`/articles?topic=${topic}`} key={topic}>
						<TopicIcon />
						{topic}
					</NavLink>
				</section>
				<article className='article__body'>{body}</article>
				<section className='article__additional-info-box'>
					<div className='article-card__additional-info'>
						<PersonIcon />
						<p>{author}</p>
					</div>
					<div className='article-card__additional-info'>
						<AccessTimeIcon />
						<p>{createTimestamp(dateData)}</p>
					</div>
					<AddVotePip article_id={article_id} votes={votes} />
					<div className='article-card__additional-info'>
						<CommentIcon /> <p>{comment_count}</p>
					</div>
				</section>
			</div>
		);
	}
}
