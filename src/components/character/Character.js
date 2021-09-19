import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Character.module.scss";

const Character = (props) => {
	const { character } = props;
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

Character.propTypes = {
	character: PropTypes.object.isRequired,
};

export default Character;
