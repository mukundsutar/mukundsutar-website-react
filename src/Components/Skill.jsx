import React from "react";
import "../CSS/Skill.css";
import SkillCard from "./SkillCard";

export default function Skill() {
	const progLang = ["Java", "Python", "C", "C++"];

	const web = [
		"HTML",
		"CSS",
		"JavaScript",
		"React.js",
		"Node.js",
		"Express.js",
		"Bootstrap",
	];

	const db = ["MySQL", "MongoDB", "JSON"];

	const tool = ["REST API", "Git", "Postman", "Visual Studio Code"];

	const design = ["Adobe After Effects", "Adobe Photoshop", "Blender"];

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
				<div className="skill-card-container">
					<SkillCard type={web} title={"Web Developer"} />
					<SkillCard
						type={progLang}
						title={"Programming Languages"}
					/>
					<SkillCard type={tool} title={"Dev Tools"} />
					<SkillCard type={db} title={"Database"} />
					<SkillCard type={design} title={"Design"} />
				</div>
			</div>
		</>
	);
}
