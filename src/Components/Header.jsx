import React from "react";
import "../CSS/Header.css";

export default function Header() {
	return (
		<>
			<div className="navbar-container">
				<div className="navbar-ele header-button">Home</div>
				<div className="navbar-ele header-button">About Me</div>
				<div className="navbar-ele header-button">Skills</div>
				<div className="navbar-ele header-button">Resume</div>
				<div className="navbar-ele header-button">Projects</div>
				<div className="navbar-ele header-button">Contact</div>
			</div>
		</>
	);
}
