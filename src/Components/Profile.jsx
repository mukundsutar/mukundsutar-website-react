import React from "react";
import "../CSS/Profile.css";
import profilePhoto from "../img/MyPhoto2.avif";

export default function Profile() {
	return (
		<>
			<div id="profile" className="profile-container">
				<div className="profile-name">
					Hi I am, <br />
					<span>Mukund Sutar</span>
				</div>

				<img className="profile-photo" src={profilePhoto} alt="" />
			</div>
		</>
	);
}
