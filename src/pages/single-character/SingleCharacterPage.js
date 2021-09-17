import React from "react";
import { useParams } from "react-router";

import styles from "./SingleCharacterPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleCharacter } from "../../redux/actions/charactersActions";

const SingleCharacterPage = () => {
	let { id } = useParams();

	const characters = useSelector((state) => state.characters.characters);
	const singleCharacter = useSelector(
		(state) => state.characters.singleCharacter
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSingleCharacter(id));
	}, [dispatch, id]);

	return (
		<div className={styles.SingleCharacterPage}>
			This is single character page
			{singleCharacter && <h1>{singleCharacter.name}</h1>}
		</div>
	);
};

export default SingleCharacterPage;
