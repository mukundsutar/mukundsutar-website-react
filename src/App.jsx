import "./App.css";
import "./CSS/button.css"
import About from "./Components/About";
import Attribution from "./Components/Attribution";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Project from "./Components/Project";
import Skill from "./Components/Skill";

function App() {
	return (
		<>
			<Header />
			<Profile />
			<About />
			<Project />
			<Skill />
			<Contact />
			<Attribution/>
		</>
	);
}

export default App;
