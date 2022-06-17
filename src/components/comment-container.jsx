import createTimestamp from "../utils/create-timestamp";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function CommentContainer({ comment }) {
	const { comment_id, body, author, created_at } = comment;

	const dateData = new Date(created_at);
	return (
		<li key={comment_id} className='comment-card'>
			<section>
				<p className='comment__body'>{body}</p>
			</section>
			<section className='card__additional-info-box'>
				<div className='card__additional-info'>
					<PersonIcon />
					<p>{author}</p>
				</div>
				<div className='card__additional-info'>
					<AccessTimeIcon />
					<p>{createTimestamp(dateData)}</p>
				</div>
			</section>
		</li>
	);
}
