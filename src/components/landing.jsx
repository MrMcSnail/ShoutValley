import { useContext } from 'react'
import { UserContext } from '../contexts/User'
import ArticleListContainer from './article-list-container'
import Users from './users';

export default function Landing() {
  const {auth} =useContext(UserContext);
  return (
		<>
			<section className='user-welcome'>
				<div>
					<h2>Welcome to ShoutValley</h2>
					<h3>- where everyone has a voice</h3>
				</div>
				{auth ? (
					<ArticleListContainer />
				) : (
					<>
						<p>
							Feel free to browse as a guest or login to an existing account
							below...
						</p>
						<Users />
					</>
				)}
			</section>
		</>
	);
}
