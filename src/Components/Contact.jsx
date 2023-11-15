import React from "react";
import "../CSS/Contact.css";

export default function Contact() {
	return (
		<>
			<div id="contact" className="contact-container">
				Contact Me:
				<div
					className="contact-ele contact-phone"
					onClick={() => {
						navigator.clipboard.writeText("8275812026");
					}}
				>
					Phone: 8275812026
				</div>
				<div
					className="contact-ele contact-email"
					onClick={() => {
						navigator.clipboard.writeText(
							"mukundsutar1512@gmail.com"
						);
					}}
				>
					Email: mukundsutar1512@gmail.com
				</div>
			</div>
		</>
	);
}
