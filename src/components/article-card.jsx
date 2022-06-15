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
		<li key={article_id} className='card'>
			<NavLink className='card__link' to={`/articles/${article_id}`}>
				<section className='card__subheading'>
					<p>{topic}</p>
					<TopicIcon />
				</section>
				<h2 className="card__title">{title}</h2>
				<section className='card__additional-info-box'>
					<div className='card__additional-info'>
						<PersonIcon />
						<p>{author}</p>
					</div>
					<div className='card__additional-info'>
						<AccessTimeIcon />
						<p>{createTimestamp(dateData)}</p>
					</div>
					<div className='card__additional-info'>
						<ThumbUpIcon />
						<p>{votes}</p>
					</div>
					<div className='card__additional-info'>
						<CommentIcon /> <p>{comment_count}</p>
					</div>
				</section>
			</NavLink>
		</li>
	);
};

export default ArticleCard;
