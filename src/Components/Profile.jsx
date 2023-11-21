import React from "react";
import "../CSS/Profile.css";
import profilePhoto from "../img/MyPhoto2.avif";
import { useMediaQuery } from "react-responsive";

export default function Profile() {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	return (
		<>
			<div id="profile" className="profile-container">
				{isDesktopOrLaptop && (
					<div className="profile-name">
						Hi I am, <br />
						<span>Mukund Sutar</span>
					</div>
				)}

				<img classname="profile-photo" src={profilePhoto} alt="" />
			</div>
		</>
	);
}
