import { NavLink } from "react-router-dom";
import TopiclListContainer from "./topic-list-container";

export default function NavBar() {
	return (
		<nav className='nav-bar'>
			<div className='dropdown'>
				<button className='dropbtn'>Topics</button>
				<div className='dropdown-content'>
					<TopiclListContainer />
				</div>
			</div>
			<div className='dropdown'>
				<button className='dropbtn'>Menu</button>
				<div className='dropdown-content'>
					<NavLink to='/'>Home</NavLink>
				</div>
			</div>
		</nav>
	);
}
