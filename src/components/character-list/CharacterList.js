import React from "react";
import Character from "../character/Character";

import styles from "./CharacterList.module.scss";

const CharacterList = (props) => {
	const { characters } = props;
	return (
		<div className={styles.CharacterList}>
			{characters.map((character) => (
				<Character character={character} key={character.id} />
			))}
		</div>
	);
};

export default CharacterList;
