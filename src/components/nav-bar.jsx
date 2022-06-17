import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import TopiclListContainer from "./topic-list-container";

export default function NavBar() {
	const { user } = useContext(UserContext);

	return (
		<nav className='nav-bar'>
			<div className='user-welcome'>
				<h2>Welcome, {user.name}</h2>
			</div>
			<br />
			<div id='topics' className='dropdown'>
				<button className='dropbtn'>Topics</button>
				<div className='dropdown-content'>
					<TopiclListContainer />
				</div>
			</div>
			<div id='menu' className='dropdown'>
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
