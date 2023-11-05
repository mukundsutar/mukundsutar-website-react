import React from "react";
import "../CSS/Project.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";

export default function Project() {
	return (
		<>
			<div id="project" className="project-container">
				Projects that I made:
				<div className="project-list">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>

				<NavLink to="/projects">
					<button className="project-btn-show-more">Show More</button>
				</NavLink>
			</div>
		</>
	);
}
