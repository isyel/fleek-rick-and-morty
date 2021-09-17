import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllCharacters } from "../../redux/actions/charactersActions";
import styles from "./HomePage.module.scss";

const Home = () => {
	const characters = useSelector((state) => state.characters.characters);
	const isLoading = useSelector((state) => state.characters.isLoading);
	const loadingError = useSelector((state) => state.characters.loadingError);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCharacters());
	}, [dispatch]);

	console.log("characters: ", characters);
	console.log("isLoading: ", isLoading);

	return (
		<div className={styles.home}>
			{isLoading ? (
				<p>Loading...</p>
			) : loadingError ? (
				<p>Error Loading</p>
			) : (
				characters.map((character) => (
					<h1 key={`${character.id}`}>
						<Link to={`/characters/${character.id}`}> {character.name}</Link>
					</h1>
				))
			)}
		</div>
	);
};

export default Home;
