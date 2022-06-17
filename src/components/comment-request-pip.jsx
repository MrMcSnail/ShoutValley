import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User";
import CommentIcon from "@mui/icons-material/Comment";

export default function CommentRequestPip({article_id,comment_count}) {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();
  
  return (
		<div className='article-card__additional-info'>
			<button className="comment" disabled={user.name === 'Guest'} onClick={()=>{navigate(`/articles/${article_id}/make_a_comment`)}}>
				<CommentIcon /> <p>{comment_count}</p>
			</button>
		</div>
	);
}
