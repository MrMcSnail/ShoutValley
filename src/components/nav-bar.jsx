import TopiclListContainer from "./topic-list-container";

export default function NavBar() {
	return (
		<nav className="nav-bar">
			<div className='dropdown'>
				<button className='dropbtn'>Topics</button>
				<div className='dropdown-content'>
					<TopiclListContainer />
				</div>
			</div>
		</nav>
	);
}
