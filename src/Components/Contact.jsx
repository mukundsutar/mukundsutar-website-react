import React from "react";
import "../CSS/Contact.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function Contact() {
	return (
		<>
			<div id="contact" className="contact-container">
				Contact Me:
				<div
					id="phone"
					className="contact-ele contact-phone"
					onClick={() => {
						navigator.clipboard.writeText("8275812026");
					}}
				>
					Phone: <span>8275812026</span>
				</div>
				<div
					id="email"
					className="contact-ele contact-email"
					onClick={() => {
						navigator.clipboard.writeText(
							"mukundsutar1512@gmail.com"
						);
					}}
				>
					Email: <span>mukundsutar1512@gmail.com</span>
				</div>
			</div>

			<Tooltip
				className="contact-tooltip-style"
				anchorSelect=".contact-ele"
				content="Click to Copy"
			/>
		</>
	);
}
