import { addVote } from "../utils/api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDown from "@mui/icons-material/ThumbDown";
import { useState } from "react";

export default function AddVotePip({ votes, article_id }) {
	const [voteChange, setVoteChange] = useState(0);
	const [err, setErr] = useState(null);

	function handleVote(increment) {
		setErr(null);
		if (voteChange === 0) {
			setVoteChange((curr) => curr + increment);
			addVote(article_id, increment).catch((err) => {
				voteChange((curr) => curr - increment);
				setErr(
					`Oops! we couldn't add your vote. Refresh the page and try again.`
				);
			});
		} else {
			setErr(`You can only add or take away one vote for the article.`);
		}
	}

	return err ? (
		<div className='article-card__additional-info'>
			<button className='vote-for-article' disabled={true}>
				<ThumbUpIcon />
			</button>
			<p>{votes + voteChange}</p>

			<button className='vote-down-article' disabled={true}>
				<ThumbDown />
			</button>
			<p>{err}</p>
		</div>
	) : (
		<div className='article-card__additional-info'>
			<button
				className='vote vote-for-article'
				onClick={() => {
					handleVote(1);
				}}
			>
				<ThumbUpIcon />
			</button>
			<p>{votes + voteChange}</p>
			<button
				className='vote vote-down-article'
				onClick={() => {
					handleVote(-1);
				}}
			>
				<ThumbDown />
			</button>
		</div>
	);
}
