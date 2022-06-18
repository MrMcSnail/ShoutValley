import "./App.css";
import Header from "./components/header";
import NavBar from "./components/nav-bar";
import ArticleListContainer from "./components/article-list-container";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./components/article-page";
import { UserContext } from "./contexts/User";
import { useState } from "react";

function App() {
	const defaultUser = {
		username: "default_user",
		name: "Guest",
		avatar_url:
			"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
	};
	const testUser = {
			"username": "tickle122",
			"name": "Tom Tickle",
			"avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
		}
	const [user, setUser] = useState(defaultUser)
	const auth = user.name === 'Guest'? false : true
	return (
		<UserContext.Provider value={{auth, user, setUser}}>
		<div className='App'>
			<Header />
			<NavBar />
			<main>
				<Routes>
					<Route path='/' element={<ArticleListContainer />} />
					<Route path='/articles' element={<ArticleListContainer />} />
					<Route path='/articles/:article_id' element={<ArticlePage />} />
				</Routes>
			</main>
		</div>
		</UserContext.Provider>
	);
}

export default App;
