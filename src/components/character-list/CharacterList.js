import React from "react";
import PropTypes from "prop-types";

import Character from "../character/Character";
import styles from "./CharacterList.module.scss";

const CharacterList = (props) => {
	const { characters } = props;
	return (
		<div className={styles.CharacterList}>
			{characters.map((character) => (
				<Character character={character} key={Math.random()} />
			))}
		</div>
	);
};

CharacterList.propTypes = {
	characters: PropTypes.array.isRequired,
};

export default CharacterList;
