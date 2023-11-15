import React from "react";
import Project from "./Project";
import Card from "./Card";
import "../CSS/ProjectPage.css";

export default function ProjectPage({ projectImageArray }) {
	return (
		<>
			<div className="project-page-container">
				My Projects:
				<div className="project-list">
					{projectImageArray.map((ele, index) => (
						<Card
							photo={ele.photo}
							text={ele.text}
							key={index}
							title={ele.title}
							desc={ele.desc}
						/>
					))}
				</div>
			</div>
		</>
	);
}
