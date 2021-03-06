import CommentContainer from "./comment-container";
import { useState, useEffect } from "react";
import { fetchComments } from "../utils/api";
import { useParams } from "react-router-dom";
import NewCommentForm from "./new-comment-form";

export default function CommentListContainer({error, setError}) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
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
				setError({ err: `Something's gone wrong. Please refresh the page.` });
			});
	}, [article_id, setError]);

	const commentList = comments
		.slice(0)
		.reverse()
		.map((comment) => {
			return (
				<CommentContainer
					key={comment.comment_id}
					comment={comment}
					setComments={setComments}
				/>
			);
		});

		return isLoading ? (
			<h2 className='loading-tag'>Loading</h2>
		) : (
			<section className='comments'>
				<NewCommentForm comments={comments} setComments={setComments} />
				<ul className='comment-list'>{commentList}</ul>
			</section>
		);
	}
