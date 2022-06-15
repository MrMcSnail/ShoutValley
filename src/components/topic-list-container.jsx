import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchTopics } from "../utils/api";

export default function TopiclListContainer() {
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetchTopics()
			.then((returnedTopics) => {
				setTopics(returnedTopics);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setError({ err: `Something's gone wrong.` });
			});
	}, []);

	const topicsList = topics.map((topic) => {
		return (
			<NavLink className='dropdown-inner-content' to={`/articles?topic=${topic.slug}`} key={topic.slug}>
				{topic.slug}
			</NavLink>
		);
	});

	return topicsList;
}
