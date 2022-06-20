import { useState, useEffect } from "react";
import { fetchUsers } from "../utils/api";
import UserCard from "./user-card";


export default function Users() {
  const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetchUsers()
			.then((returnedUsers) => {
				setUsers(returnedUsers);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setError({ err: `Something's gone wrong.` });
			});
	}, []);

	const userList = users.map((user) => {
		console.log(user);
		return (
			<UserCard
				key={user.username}
				user={user}
				name={user.name}
				username={user.username}
				avatar={user.avatar_url}
			/>
		);
	});

  if (error) {
		return <h2 className='card'>{error.err}</h2>;
	} else {
		return isLoading ? (
			<h2 className='loading-tag'>Loading</h2>
		) : (
			<section className='user-list-container'>
				<ul className='user-list'>{userList}</ul>
			</section>
		);
	}
}