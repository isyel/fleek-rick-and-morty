import React from "react";
import { Link } from "react-router-dom";

import styles from "./Character.module.scss";

const Character = ({ character }) => {
	return (
		<div className={styles.Character}>
			<img
				src={character.image}
				className={styles.Character__image}
				alt={character.name}
			/>
			<span className={styles.Character__name}>
				<strong>{character.name}</strong>
			</span>
			<span className={styles.Character__species}>{character.species}</span>
			<span className={styles.Character__status}>
				Status: {character.status}
			</span>
			<Link
				className={styles.Character__button}
				to={`/character/${character.id}`}>
				Details
			</Link>
		</div>
	);
};

export default Character;
