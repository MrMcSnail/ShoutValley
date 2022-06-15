import { addVote } from "../utils/api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useState } from "react";

export default function AddVotePip({ votes, article_id }) {
	const [voteChange, setVoteChange] = useState(0);
	const [err, setErr] = useState(null);
	function handleVote() {
		setVoteChange((curr) => curr + 1);
		setErr(null);
		addVote(article_id).catch((err) => {
			voteChange((curr) => curr - 1);
			setErr(`Oops! we couldn't add your vote. Refresh the page and try again.`);
		});
	}

	return err ? (
		<div className='article-card__additional-info'>
			<button className='vote-for-article' disabled='true'>
				<ThumbUpIcon />
				<p>{err}</p>
			</button>
		</div>
	) : (
		<div className='article-card__additional-info'>
			<button className='vote-for-article' onClick={handleVote}>
				<ThumbUpIcon />
				<p>{votes + voteChange}</p>
			</button>
		</div>
	);
}
