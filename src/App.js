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
		name: "Guest",
		avatar_url:
			"https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
	};
	const [user, setUser] = useState({})
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
