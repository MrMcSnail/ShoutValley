import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User";

export default function UserCard({ user, username, name, avatar }) {
const {setUser} =useContext(UserContext);
const [active, setActive] = useState(false)
const nav = useNavigate()
const switchUser = () => {
	setUser(user);
	setActive(true);
	nav('/')
}

	return (
		<li key={username} className='user-card'>
			<div id='avatar-container'>
			<img id='avatar' src={avatar} alt='User Avatar' />
			</div>
			<p>{name}</p>
			<p>{username}</p>
			<button onClick={switchUser} disabled={active}>Switch User</button>
		</li>
	);
}
