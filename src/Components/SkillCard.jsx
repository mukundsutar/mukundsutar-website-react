import React, { useEffect } from "react";
import "../CSS/SkillCard.css";

export default function SkillCard({ type, title }) {
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

	const db = ["MySQL", "MongoDB"];

	const tool = ["REST API", "Git", "Postman", "Visual Studio Code"];

	const design = ["Adobe After Effects", "Adobe Photoshop", "Blender"];

	const cssName = "";

	const checkSkill = (ele) => {
		switch (ele) {
			case "JavaScript":
				return "javascript";
			case "React.js":
				return "react";
			case "Node.js":
				return "node";
			case "Express.js":
				return "express";
			case "MongoDB":
				return "mongo";
			case "REST API":
				return "rest";
			case "Git":
				return "git";
			default:
				return "";
		}
	};

	return (
		<>
			<div className="skill-card">
				<div className="skill-title">{title}</div>
				<div className="skill-ele">
					{type.map((ele, index) => (
						<span className={`${checkSkill(ele)}`}>{ele}</span>
					))}
				</div>
			</div>
		</>
	);
}
