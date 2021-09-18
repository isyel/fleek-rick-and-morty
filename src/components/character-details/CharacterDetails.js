import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Episodes from "../episodes/Episodes";

import styles from "./CharacterDetails.module.scss";

const CharacterDetails = (props) => {
	const { character, handleGetEpisodeData } = props;
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const createdDate = new Date(character?.created);
	const episode = useSelector((state) => state.episode);

	useEffect(() => {
		if (character) handleGetEpisodeData(character.episode[0]);
	}, [character, handleGetEpisodeData]);

	const handleFetchEpisode = (episodeLink) => {
		handleGetEpisodeData(episodeLink);
	};

	return (
		<div className={styles.CharacterDetails__container}>
			{character && (
				<>
					<div className={styles.CharacterDetails}>
						<img src={character.image} alt={character.name} />
						<div className={styles.CharacterDetails__list}>
							<span className={styles.CharacterDetails__list__item}>
								#{character.id}
							</span>
							<span className={styles.CharacterDetails__list__item}>
								{character.name}
							</span>
							<span className={styles.CharacterDetails__list__item}>
								{character.status}
							</span>
							<span className={styles.CharacterDetails__list__item}>
								{character.species}
							</span>
							<span className={styles.CharacterDetails__list__item}>
								{character.type}
							</span>
							<span className={styles.CharacterDetails__list__item}>
								{character.gender}
							</span>
							<span className={styles.CharacterDetails__list__item}>
								<a href={character.origin.url} target="_blank" rel="noreferrer">
									{character.origin.name}
								</a>
							</span>
							<span className={styles.CharacterDetails__list__item}>
								Created: {createdDate.toLocaleDateString("en-US", options)}
							</span>
						</div>
					</div>

					{character.episode.length > 0 ? (
						<Episodes
							episodes={character.episode}
							episode={episode}
							handleFetchEpisode={handleFetchEpisode}
						/>
					) : (
						<h3>No Episodes</h3>
					)}
				</>
			)}
		</div>
	);
};

export default CharacterDetails;
