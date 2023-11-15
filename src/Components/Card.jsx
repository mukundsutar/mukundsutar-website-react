import React from "react";
import "../CSS/Card.css";
import cardPreview from "../img/projectPreview.jpeg";
import pinpong from "../img/project/Ping Pong Game.png";

export default function Card({photo, text, title, skill}) {

	console.log(photo);

	return (
		<>
			<div className="card-container">
				<img
					className="card-ele card-preview"
					src={photo}
					alt={text}
				/>

				<div className="card-ele card-info">
					<div className="card-title">{title}</div>

					<div className="card-desc">
						{skill}
					</div>
				</div>
			</div>
		</>
	);
}
