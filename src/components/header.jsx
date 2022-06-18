import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import Person from "@mui/icons-material/Person";

export default function Header() {
	const { user } = useContext(UserContext);

	return (
		<header className='header'>
			<Link to='/'>
				<h1 className='app__title'>ShoutValley</h1>
			</Link>
			<div className='user-welcome'>
				<Person /> <h2>{user.username}</h2>
			</div>
		</header>
	);
}
