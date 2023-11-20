import React from "react";
import "../CSS/Skill.css";
import SkillCard from "./SkillCard";

export default function Skill() {
	const skillSet = [
		"Java",
		"Python",
		"C",
		"C++",
		"HTML",
		"CSS",
		"JavaScript",
		"React.js",
		"Node.js",
		"Express.js",
		"Bootstrap",
		"MySQL",
		"MongoDB",
		"REST API",
		"Git",
		"Postman",
	];

	return (
		<>
			<div id="skill" className="skill-container">
				What I know:
				<br />
				{/* <div className="skill-ele">
					{Array.from({ length: skillSet.length }, (_, index) => (
						<span key={index}>{skillSet[index]}&nbsp; &nbsp; </span>
					))}
				</div> */}
				{Array.from({ length: 4 }, (_, index) => (
					<SkillCard />
				))}
			</div>
		</>
	);
}
