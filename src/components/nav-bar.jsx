import { useNavigate, useLocation, Link } from "react-router-dom";
import TopiclListContainer from "./topic-list-container";
import ListOptions from "./list-options";

export default function NavBar() {
	const nav = useNavigate();
	const location = useLocation();
	console.log("location.pathname: ");
	return (
		<nav className='nav-bar'>
			<div id='topics' className='dropdown'>
				<button className='dropbtn'>Topics</button>
				<div className='dropdown-content'>
					<TopiclListContainer />
				</div>
			</div>
			<div id='Browse' className='dropdown'>
				<button
					className='dropbtn'
					onClick={() => {
						nav("/articles");
					}}
				>
					Browse
				</button>
			</div>
			<div id='Browse' className='dropdown'>
				<button
				className='dropbtn'
				onClick={() => {
					nav("/users");
				}}
				>
				Users
			</button>
			</div>
			{location.pathname === "/articles" ? <ListOptions /> : <></>}
		</nav>
	);
}
