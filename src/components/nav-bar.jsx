import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import TopiclListContainer from "./topic-list-container";

export default function NavBar() {
	const { user } = useContext(UserContext);
	console.log('user: ', user);

	return (
		<nav className='nav-bar'>
			<div className='dropdown'>
				<button className='dropbtn'>Topics</button>
				<div className='dropdown-content'>
					<TopiclListContainer />
				</div>
			</div>
			<div className='user-welcome'>
				<h2>Welcome {user.name}</h2>
			</div>
			<div className='dropdown'>
				<button className='dropbtn'>Menu</button>
				<div className='dropdown-content'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/users'>Log In</NavLink>
				</div>
			</div>
		</nav>
	);
}

/* user welcome
			disable buttns for guest
			disable comments and votes on own articles
			disable abilty to delete others comments
			*/
