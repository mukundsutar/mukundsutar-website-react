import React from "react";
import Project from "./Project";
import Card from "./Card";
import "../CSS/ProjectPage.css";
import movieArchive from "../img/project/FilmPedia - Movie Database.png";
import pokedex from "../img/project/Pokedex.png";
import tictactoe from "../img/project/Tic Tac Toe.png";
import wordle from "../img/project/Wordle-Clone.png";
import pinpong from "../img/project/Ping Pong Game.png";
import uselessfacts from "../img/project/Useless Facts.jpeg";

export default function ProjectPage() {
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
			<div className="project-page-container">
				My Projects:
				<div className="project-list">
					{projectImageArray.map((ele, index) => (
						<Card photo={ele.photo} text={ele.text} key={index} />
					))}
				</div>
			</div>
		</>
	);
}
