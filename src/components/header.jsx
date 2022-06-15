import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className='header'>
			<Link to='/'>
				<h1 className="app__title">ShoutValley</h1>
			</Link>
		</header>
	);
}
