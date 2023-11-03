import React from "react";
import "../CSS/Project.css";
import Card from "./Card";

export default function Project() {
	return (
		<>
			<div className="project-container">
				My Projects:
				<div className="project-list">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
