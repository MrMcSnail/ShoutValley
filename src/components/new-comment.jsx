import ArticleContainer from "./article-container";
import CommentListContainer from "./comment-list-container";
import NewCommentForm from "./new-comment-form";


export default function NewComment() {
	return (
		<>
			<ArticleContainer />
      <NewCommentForm />
			<CommentListContainer />
		</>
	);
}
