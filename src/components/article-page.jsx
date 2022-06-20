import { useState } from "react";
import ArticleContainer from "./article-container";
import CommentListContainer from "./comment-list-container";

export default function ArticlePage() {
	const [error, setError] = useState(null);
	if (error) {
		return <h2 className='card'>{error.err}</h2>;
	} else {
		return (
			<>
				<ArticleContainer error={error} setError={setError} />
				<CommentListContainer error={error} setError={setError} />
			</>
		);
	};
}
