import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { useParams, useNavigate } from "react-router-dom";
import { postComment } from "../utils/api";
import validateForm from "../utils/validate-form";

export default function NewCommentForm({comments,setComments}) {
	const { article_id } = useParams();
	const { user } = useContext(UserContext);
	const [body, setBody] = useState("");
	const [err, setErr] = useState(null);

	function handleChange({ target }) {
		setBody(target.value);
	}

	function handleCommentSubmission(event) {
		event.preventDefault();
		const { username } = user;
		const newComment = {
						comment_id: 'Awaiting post: temp. new comment',
						body,
						author: username,
						created_at: Date.now(),
					}
		setErr(null);
		return (validateForm(body))
			? postComment(article_id, body, username)
					.then(() => {
						setComments((prevComments) => [...prevComments, newComment]);
						setBody("");
					})
					.catch((err) => {
						setErr(true);
					})
			: alert("Please write a comment before submitting your post.");
	}

	return err ? (
		<p>Oops! we couldn't add your comment. Refresh the page and try again.</p>
	) : (
		<form className='new-comment__form' onSubmit={handleCommentSubmission}>
			<label>Add to the conversation...</label>
			<textarea
				type='text'
				id='comment-body'
				value={body}
				onChange={handleChange}
			/>
			<input id='submit-btn' type='submit' value='Post Comment' />
		</form>
	);
}
