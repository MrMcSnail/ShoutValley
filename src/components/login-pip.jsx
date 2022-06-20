import { NavLink } from "react-router-dom";
import Person from "@mui/icons-material/Person";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function LoginUser() {
	const { user } = useContext(UserContext);
	const { name } = user;
	return (
		<NavLink to='/users' className='login-user'>
			<Person /> {name}
		</NavLink>
	);
}
