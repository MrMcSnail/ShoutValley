import "./App.css";
import Header from "./components/header";
import NavBar from "./components/nav-bar";
import ArticleListContainer from "./components/article-list-container";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./components/article-page";

function App() {
	return (
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
	);
}

export default App;
