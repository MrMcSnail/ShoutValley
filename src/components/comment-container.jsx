import createTimestamp from "../utils/create-timestamp";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { Delete } from "@mui/icons-material";
import { deleteComment } from "../utils/api";

export default function CommentContainer({ comment, setComments }) {
	const [err, setErr] = useState(null);
	const { comment_id, body, author, created_at} = comment;
	const {user}= useContext(UserContext)
	const dateData = new Date(created_at);
	
	function handleDelete() {
		setErr(false)
		setComments((currentComments)=> currentComments.filter((comment)=> comment.comment_id !== comment_id))
		deleteComment(comment_id).then((res)=>{
			console.log('res.status: ', res.status);
		}).catch((err)=>{
			alert(`Sorry, something went wrong while trying to delete your comment. Please refresh an try again`)
		});
	}


	return (
		<li key={comment_id} className='comment-card'>
			<div>
				{author === user.username && (
					<Delete disabled={!err} tabIndex='0' comment_id={comment_id} id='cmt-del' onClick={handleDelete}></Delete>
				)}
			</div>
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
