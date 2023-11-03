import React from "react";
import "../CSS/Profile.css";
import profilePhoto from "../img/MyPhoto2.avif";

export default function Profile() {
	return (
		<>
			<div className="profile-container">
				<div className="profile-name">
					Hi, <br />I am Mukund Sutar
				</div>

				<img className="profile-photo" src={profilePhoto} alt="" />
			</div>
		</>
	);
}
