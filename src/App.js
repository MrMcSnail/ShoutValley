import "./App.css";
import Header from "./components/header";
import NavBar from "./components/nav-bar";
import ArticleListContainer from "./components/article-list-container";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./components/article-page";
import { UserContext } from "./contexts/User";
import { useState } from "react";
import PageNotFound from "./components/page-not-found";
import Users from "./components/users";
import Landing from "./components/landing";

export default function App() {
	const defaultUser = {
		username: "Guest",
		name: "Guest",
		avatar_url:
			"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
	};
	const [user, setUser] = useState(defaultUser)
	const auth = user.name === 'Guest'? false : true
	return (
		<UserContext.Provider value={{ auth, user, setUser }}>
			<div className='App'>
				<Header />
				<NavBar />
				<main>
					<Routes>
						<Route path='/' element={<Landing />} />
						<Route path='/users' element={<Users />} />
						<Route path='/articles' element={<ArticleListContainer />} />
						<Route path='/articles/:article_id' element={<ArticlePage />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</main>
			</div>
		</UserContext.Provider>
	);
}
