import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CharacterList from "../../components/character-list/CharacterList";
import SideBar from "../../components/sidebar/SideBar";

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

	const handleGetCharactersWithFilters = (queryParameters) => {
		dispatch(getAllCharacters(queryParameters));
	};

	return (
		<div className={styles.HomePage}>
			<div className={styles.HomePage__sideBar}>
				<SideBar
					handleGetCharactersWithFilters={handleGetCharactersWithFilters}
				/>
			</div>
			<div className={styles.HomePage__body}>
				<CharacterList characters={characters} />
			</div>
		</div>
	);
};

export default Home;
