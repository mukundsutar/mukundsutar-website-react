import React from "react";
import "../CSS/Header.css";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Resume from "../docs/Mukund Sutar_Resume.pdf";

export default function Header() {
	return (
		<>
			<div className="navbar-container">
				<HashLink smooth to="#">
					<div className="navbar-ele header-button">Home</div>
				</HashLink>

				<HashLink smooth to="#about">
					<div className="navbar-ele header-button">About Me</div>
				</HashLink>

				<HashLink smooth to="#skill">
					<div className="navbar-ele header-button">Skills</div>
				</HashLink>

				<div className="navbar-ele header-button">
					<a href={Resume} target="_blank" rel="noopener">
						Resume
					</a>
				</div>

				<HashLink smooth to="#project">
					<div className="navbar-ele header-button">Projects</div>
				</HashLink>

				<HashLink smooth to="#contact">
					<div className="navbar-ele header-button">Contact</div>
				</HashLink>
			</div>
		</>
	);
}
