import createTimestamp from "../utils/create-timestamp";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TopicIcon from "@mui/icons-material/Topic";
import { NavLink } from "react-router-dom";

const ArticleCard = ({ article }) => {
	const { article_id, title, topic, author, created_at, votes, comment_count } =
		article;

	const dateData = new Date(created_at);
	return (
		<li key={article_id} className='article-card'>
			<NavLink className='card-link title' to={`/articles/${article_id}`}>
				{title}
			</NavLink>
			<section className='article-card__subheading'>
				<TopicIcon />
				<p>{topic}</p>
			</section>
			<section className='article-card__additional-info-box'>
				<div className='article-card__additional-info'>
					<PersonIcon />
					<p>{author}</p>
				</div>
				<div className='article-card__additional-info'>
					<AccessTimeIcon />
					<p>{createTimestamp(dateData)}</p>
				</div>
				<div className='article-card__additional-info'>
					<ThumbUpIcon />
					<p>{votes}</p>
				</div>
				<div className='article-card__additional-info'>
					<CommentIcon /> <p>{comment_count}</p>
				</div>
			</section>
		</li>
	);
};

export default ArticleCard;
