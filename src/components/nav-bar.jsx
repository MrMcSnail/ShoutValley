import { Link } from "react-router-dom";
import TopiclListContainer from "./topic-list-container";

export default function NavBar() {
	return (
			<div class='dropdown'>
				<button class='dropbtn'>Topics</button>
				<div class='dropdown-content'>
					<TopiclListContainer />
				</div>
			</div>
	);
}
