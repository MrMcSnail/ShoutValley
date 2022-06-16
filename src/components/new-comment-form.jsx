import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { useParams, useNavigate } from "react-router-dom";
import { postComment } from "../utils/api";

export default function NewCommentForm() {
	const { article_id } = useParams();
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const [body, setBody] = useState("");
	const [err, setErr] = useState(null);

	function handleChange({ target }) {
		setBody(target.value);
	}

	function handleCommentSubmission(event) {
		setErr(null);
		const { username } = user;
		event.preventDefault();
		return postComment(article_id, body, username)
			.then(() => {
				setBody("");
			})
			.then(() => {
				navigate(-1);
			})
			.catch((err) => {
				setErr(true);
			});
	}

	return err ? (
		<p>Oops! we couldn't add your vote. Refresh the page and try again.</p>
	) : (
		<form className='new-comment__form' onSubmit={handleCommentSubmission}>
			<label>Add to the conversation...</label>
			<input
				type='text'
				id='comment-body'
				value={body}
				onChange={handleChange}
			/>
			<input type='submit' value='Submit' />
		</form>
	);
}
