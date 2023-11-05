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
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
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
							<Project />
							<Skill />
							<Contact />
							<Attribution />
						</>
					}
				/>

				<Route
					path="/projects"
					element={
						<>
							<ProjectPage />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
