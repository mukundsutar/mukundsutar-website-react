import React, { useEffect } from "react";
import "../CSS/Header.css";
import { HashLink } from "react-router-hash-link";
import { NavLink, Navigate, useLocation, useMatch, useNavigate } from "react-router-dom";
import Resume from "../docs/Mukund Sutar_Resume.pdf";

export default function Header() {
	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
		const yOffset = -90;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	return (
		<>
			<div className="navbar-container">
				<HashLink smooth to="#">
					<div className="navbar-ele header-button">Home</div>
				</HashLink>

				<HashLink
					smooth
					to="#about"
					scroll={(el) => scrollWithOffset(el)}
				>
					
					<div className="navbar-ele header-button">About Me</div>
				</HashLink>

				<HashLink
					smooth
					to="#project"
					scroll={(el) => scrollWithOffset(el)}
				>
					<div className="navbar-ele header-button">Projects</div>
				</HashLink>

				<HashLink smooth to="#skill">
					<div className="navbar-ele header-button">Skills</div>
				</HashLink>

				<div className="navbar-ele header-button">
					<a href={Resume} target="_blank" rel="noopener">
						Resume
					</a>
				</div>

				<HashLink smooth to="#contact">
					<div className="navbar-ele header-button">Contact</div>
				</HashLink>
			</div>
		</>
	);
}
