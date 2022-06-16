import "./App.css";
import Header from "./components/header";
import NavBar from "./components/nav-bar";
import ArticleListContainer from "./components/article-list-container";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./components/article-page";
import NewComment from "./components/new-comment";
import { UserContext } from "./contexts/User";
import { useState } from "react";

function App() {
	const defaultUser = {
		username: "default_user",
		name: "Guests",
		avatar_url:
			"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
	};
	const testUser = {
			"username": "tickle122",
			"name": "Tom Tickle",
			"avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
		}
	
	const [user, setUser] = useState(testUser)
	return (
		<UserContext.Provider value={{user, setUser}}>
		<div className='App'>
			<Header />
			<NavBar />
			<main>
				<Routes>
					<Route path='/' element={<ArticleListContainer />} />
					<Route path='/articles' element={<ArticleListContainer />} />
					<Route path='/articles/:article_id' element={<ArticlePage />} />
					<Route path='/articles/:article_id/make_a_comment' element={<NewComment />} />
				</Routes>
			</main>
		</div>
		</UserContext.Provider>
	);
}

export default App;
