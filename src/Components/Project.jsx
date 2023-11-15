import React from "react";
import "../CSS/Project.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import movieArchive from "../img/project/FilmPedia - Movie Database.png";
import pokedex from "../img/project/Pokedex.png";
import tictactoe from "../img/project/Tic Tac Toe.png";
import wordle from "../img/project/Wordle-Clone.png";
import pinpong from "../img/project/Ping Pong Game.png";
import uselessfacts from "../img/project/Useless Facts.jpeg";

export default function Project() {
	const projectImageArray = [
		{
			photo: movieArchive,
			text: "movieArchive",
		},
		{
			photo: pokedex,
			text: "pokedex",
		},
		{
			photo: tictactoe,
			text: "tictactoe",
		},
		{
			photo: wordle,
			text: "wordle",
		},
		{
			photo: pinpong,
			text: "pinpong",
		},
		{
			photo: uselessfacts,
			text: "uselessfacts",
		},
	];

	return (
		<>
			<div id="project" className="project-container">
				Projects that I made:
				<div className="project-list">
					{projectImageArray.map((ele, index) => (
						<Card photo={ele.photo} text={ele.text} key={index} />
					))}
				</div>
				<NavLink to="/projects">
					{/* <button className="project-btn-show-more">Show More</button> */}
					<button class="button">
						<svg
							class="svg-icon"
							width="24"
							viewBox="0 0 24 24"
							height="24"
							fill="none"
						>
							<g
								stroke-width="2"
								stroke-linecap="round"
								stroke="#056dfa"
								fill-rule="evenodd"
								clip-rule="evenodd"
							>
								<path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
								<path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
							</g>
						</svg>
						<span class="lable">Show More</span>
					</button>
				</NavLink>
			</div>
		</>
	);
}
