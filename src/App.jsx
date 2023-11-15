import "./App.css";
import "./CSS/button.css";
import About from "./Components/About";
import Attribution from "./Components/Attribution";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Project from "./Components/Project";
import ProjectPage from "./Components/ProjectPage";
import Skill from "./Components/Skill";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// project screenshots
import movieArchive from "./img/project/FilmPedia - Movie Database.png";
import pokedex from "./img/project/Pokedex.png";
import tictactoe from "./img/project/Tic Tac Toe.png";
import wordle from "./img/project/Wordle-Clone.png";
import pinpong from "./img/project/Ping Pong Game.png";
import uselessfacts from "./img/project/Useless Facts.jpeg";
import atmcard from "./img/project/ATM Card Generator.png";
import { Redirect } from "react-router-dom";

const RedirectComponent = () => {
	const location = useLocation();

	// Check if the current pathname ends with "/my-projects#about"
	if (location.pathname.endsWith("/my-projects#about")) {
		// Redirect to "/website#about"
		return <Navigate to="/website#about" replace />;
	}

	// If the condition is not met, render the child routes
	return <Contact />;
};

function App() {
	const projectImageArray = [
		{
			photo: movieArchive,
			text: "movieArchive",
			title: "FilmPedia",
			skill: "React.js, RESTful API's, MongoDB, Git, Express.js, Node.js, Skeleton Loading, Zustand, UI/UX",
		},
		{
			photo: pokedex,
			text: "pokedex",
			title: "Master Pokédex",
			skill: "React.js, RESTful API, Data Visualization, Adobe Photoshop",
		},
		{
			photo: tictactoe,
			text: "tictactoe",
			title: "Tic Tac Toe",
			skill: "HTML, CSS, JavaScript",
		},
		{
			photo: wordle,
			text: "wordle",
			title: "Wordle",
			skill: "HTML, CSS, JavaScript",
		},
		{
			photo: pinpong,
			text: "pinpong",
			title: "Ping Pong Arcade",
			skill: "HTML, CSS, JavaScript",
		},
		{
			photo: uselessfacts,
			text: "uselessfacts",
			title: "Useless Facts Generator",
			skill: "React.js, RESTful API",
		},
		{
			photo: atmcard,
			text: "atmcard",
			title: "ATM Card Generator",
			skill: "React.js, RESTful API, Data Visualization, Adobe Photoshop",
		},
	];

	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Profile />
							<About />
							<Project projectImageArray={projectImageArray} />
							<Skill />
							<Contact />
							<Attribution />
						</>
					}
				/>

				<Route
					path="/my-projects"
					element={
						<>
							{/* <Navigate
								exact
								from="/my-projects#about"
								to="/#about"
							/> */}
							<ProjectPage
								projectImageArray={projectImageArray}
							/>
						</>
					}
				/>

				
			</Routes>
		</>
	);
}

export default App;
