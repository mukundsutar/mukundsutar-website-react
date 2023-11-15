import React from "react";
import "../CSS/Project.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";

export default function Project({ projectImageArray }) {
	return (
		<>
			<div id="project" className="project-container">
				Projects that I made:
				<div className="project-list">
					{projectImageArray.slice(0, 6).map((ele, index) => (
						<Card
							photo={ele.photo}
							text={ele.text}
							key={index}
							title={ele.title}
							skill={ele.skill}
						/>
					))}
				</div>
				<NavLink to="/my-projects">
					<button className="button">
						<svg
							className="svg-icon"
							width="24"
							viewBox="0 0 24 24"
							height="24"
							fill="none"
						>
							<g
								strokeWidth="2"
								strokeLinecap="round"
								stroke="#056dfa"
								fillRule="evenodd"
								clipRule="evenodd"
							>
								<path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
								<path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
							</g>
						</svg>
						<span className="lable">Show More</span>
					</button>
				</NavLink>
			</div>
		</>
	);
}
