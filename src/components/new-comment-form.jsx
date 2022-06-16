import {useContext} from 'react'
import { UserContext } from '../contexts/User';

export default function NewCommentForm() {
	return (<form className='new-comment__form'>
		<input type='text'>your comment here</input>
	</form>);
}
