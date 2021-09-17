import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCharacters } from "../../redux/actions/charactersActions";
import styles from "./HomePage.module.scss";

const Home = () => {
	const characters = useSelector((state) => state.characters.characters);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCharacters());
	}, [dispatch]);

	console.log("characters: ", characters);

	return (
		<div className={styles.home}>
			Home Page
			{characters.map((character) => (
				<h1>{character.name}</h1>
			))}
		</div>
	);
};

export default Home;
