import React from "react";

export default function SkillCard() {
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

  const progLang=["Java",
  "Python",
  "C",
  "C++",]

  const web=["HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Bootstrap",]

  const db=["MySQL",
  "MongoDB",]

	return (
		<>
			<div className="skill-card-container">
				<div className="skill-title"></div>
				<div className="skill-ele"></div>
			</div>
		</>
	);
}
