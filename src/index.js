import React from 'react';
import List from "./containers/List";
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="container-fluid">
			<h1>Movie List</h1>
			<nav className="navbar sticky-top navbar-light bg-dark">
				<h1 className="navbar-brand text-light">Movie List</h1>
			</nav>

			<List/>
		</div>
	);
};

createRoot(document.getElementById('root')).render(<App/>);