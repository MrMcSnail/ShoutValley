import FilterListRoundedIcon from "@mui/icons-material/FilterList";
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUp from "@mui/icons-material/ThumbUp";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function ListOptions({ topic }) {
	const [orderToggle, setOrderToggle] = useState({order: "ASC", order_name: "ascending", icon: <ArrowUpwardIcon/>});
	// Order must be 'ASC' or 'DESC'.

	function handleOrderClick() {
		return orderToggle.order === "DESC"
			? setOrderToggle({ order: "ASC", order_name: "ascending", icon: <ArrowUpwardIcon /> })
			: setOrderToggle({ order: "DESC", order_name: "descending", icon: <ArrowDownwardIcon /> });
	}

	return (
		<div id='list-options' className='dropdown'>
			<button className='dropbtn'>
				<FilterListRoundedIcon />
				<p id='order-toggle__innerText'>{orderToggle.order_name}</p>
			</button>
			<div className='dropdown-content'>
				<button
					id='order-toggle'
					className='dropdown-inner-content'
					onClick={handleOrderClick}
				>
					{orderToggle.icon}
				</button>
				<NavLink
					id='Alpha'
					className='dropdown-inner-content'
					to={
						topic
							? `/articles?order=${orderToggle.order}&sort_by=title&topic=${topic}`
							: `/articles?order=${orderToggle.order}&sort_by=title`
					}
				>
					<SortByAlphaRoundedIcon />
				</NavLink>
				<NavLink
					id='Votes'
					className='dropdown-inner-content'
					to={
						topic
							? `/articles?order=${orderToggle.order}&sort_by=votes&topic=${topic}`
							: `/articles?order=${orderToggle.order}&sort_by=votes`
					}
				>
					<ThumbUp />
				</NavLink>
				<NavLink
					id='comments'
					className='dropdown-inner-content'
					to={
						topic
							? `/articles?order=${orderToggle.order}&sort_by=comment_count&topic=${topic}`
							: `/articles?order=${orderToggle.order}&sort_by=comment_count`
					}
				>
					<CommentIcon />
				</NavLink>
				<NavLink
					id='date'
					className='dropdown-inner-content'
					to={
						topic
							? `/articles?order=${orderToggle.order}&sort_by=created_at&topic=${topic}`
							: `/articles?order=${orderToggle.order}&sort_by=created_at`
					}
				>
					<AccessTimeIcon />
				</NavLink>
			</div>
		</div>
	);
}
