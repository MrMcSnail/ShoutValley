import CommentContainer from "./comment-container";
import { useState, useEffect } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";

export default function CommentListContainer() {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const { article_id } = useParams();
	useEffect(() => {
		setIsLoading(true);
		fetchComments(article_id)
			.then((returnedComments) => {
				setComments(returnedComments);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setError({ err: `Somethings gone wrong.` });
			});
	}, [article_id]);

	const commentList = comments
		.slice(0)
		.reverse()
		.map((comment) => {
			return <CommentContainer key={comment.comment_id} comment={comment} />;
		});

	if (error) {
		return <h2>{error.err}</h2>;
	} else {
		return isLoading ? (
			<h2 className='loading-tag'>Loading</h2>
		) : (
			<ul className='comment-list'>{commentList}</ul>
		);
	}
}
