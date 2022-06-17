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
			setErr(true);
			alert(`You get one chance to vote for the article. \n Vote wisely...`);
		}
	}

	return err ? (
		<div className='article__additional-info'>
			<button className='vote' disabled={true}>
				<ThumbUpIcon />
			</button>
			<p>{votes + voteChange}</p>

			<button className='vote' disabled={true}>
				<ThumbDown />
			</button>
		</div>
	) : (
		<div className='article__additional-info'>
			<button
				className='vote'
				onClick={() => {
					handleVote(1);
				}}
			>
				<ThumbUpIcon />
			</button>
			<p>{votes + voteChange}</p>
			<button
				className='vote'
				onClick={() => {
					handleVote(-1);
				}}
			>
				<ThumbDown />
			</button>
		</div>
	);
}
