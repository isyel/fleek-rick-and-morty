import React from "react";
import { useParams } from "react-router";

import styles from "./SingleCharacterPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	getSingleCharacter,
	getSingleCharacterSuccess,
} from "../../redux/actions/charactersActions";
import CharacterDetails from "../../components/character-details/CharacterDetails";
import { getEpisodeData } from "../../redux/actions/episodes.Actions";

const SingleCharacterPage = () => {
	let { id } = useParams();

	const characters = useSelector((state) => state.characters.characters);
	const singleCharacter = useSelector(
		(state) => state.characters.singleCharacter
	);
	const dispatch = useDispatch();

	useEffect(() => {
		const singleCharacter = characters.find(
			(character) => character.id === +id
		);
		if (singleCharacter) {
			dispatch(getSingleCharacterSuccess(singleCharacter));
		} else {
			dispatch(getSingleCharacter(+id));
		}
	}, [characters, dispatch, id]);

	const handleGetEpisodeData = (episodeLink) => {
		dispatch(getEpisodeData(episodeLink));
	};

	return (
		<div className={styles.SingleCharacterPage}>
			<CharacterDetails
				character={singleCharacter}
				handleGetEpisodeData={handleGetEpisodeData}
			/>
		</div>
	);
};

export default SingleCharacterPage;
