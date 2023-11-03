import React from "react";
import "../CSS/Card.css";
import cardPreview from "../img/projectPreview.jpeg";

export default function Card() {
	return (
		<>
			<div className="card-container">
				<img
					className="card-ele card-preview"
					src={cardPreview}
					alt=""
				/>

				<div className="card-ele card-info">
					<div className="card-title">Title</div>

					<div className="card-desc">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, provident?
					</div>
				</div>
			</div>
		</>
	);
}
