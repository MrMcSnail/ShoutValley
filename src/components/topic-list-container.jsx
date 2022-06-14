import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
				setError({ err: `Somethings gone wrong.` });
			});
	}, []);

	const topicsList = topics.map((topic) => {
		return (
				<Link to={`/articles?topic=${topic.slug}`} >{topic.slug}</Link>
		);
	});

	return topicsList;
}
