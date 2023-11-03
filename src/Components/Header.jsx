import React from "react";
import "../CSS/Header.css";

export default function Header() {
	return (
		<>
			<div className="navbar-container">
				<div className="navbar-ele">Home</div>
				<div className="navbar-ele">About Me</div>
				<div className="navbar-ele">Skills</div>
				<div className="navbar-ele">Resume</div>
				<div className="navbar-ele">Projects</div>
				<div className="navbar-ele">Contact</div>
			</div>
		</>
	);
}
