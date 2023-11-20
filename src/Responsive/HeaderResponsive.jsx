import React from "react";
import "../CSS/HeaderResponsive.css";
import { HashLink } from "react-router-hash-link";
import Resume from "../docs/Mukund Sutar_Resume.pdf";
import { useMediaQuery } from "react-responsive";
import { useToggleStore } from "../store/storage";

export default function HeaderResponsive() {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const { isToggled, toggle } = useToggleStore();

	return (
		<>
			{isTabletOrMobile && (
				<div className="navbar-responsive-container">
					<HashLink smooth to="#" onClick={toggle}>
						<div className="navbar-ele header-button">Home</div>
					</HashLink>

					<HashLink smooth to="#about" onClick={toggle}>
						<div className="navbar-ele header-button">About Me</div>
					</HashLink>

					<HashLink smooth to="#project" onClick={toggle}>
						<div className="navbar-ele header-button">Projects</div>
					</HashLink>

					<HashLink smooth to="#skill" onClick={toggle}>
						<div className="navbar-ele header-button">Skills</div>
					</HashLink>

					<div className="navbar-ele header-button" onClick={toggle}>
						<a
							href={Resume}
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</div>

					<HashLink smooth to="#contact" onClick={toggle}>
						<div className="navbar-ele header-button">Contact</div>
					</HashLink>
				</div>
			)}
		</>
	);
}
