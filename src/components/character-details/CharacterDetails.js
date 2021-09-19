import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { ReactComponent as ArrowBack } from "./../../assets/arrow-back.svg";
import Episodes from "../episodes/Episodes";
import styles from "./CharacterDetails.module.scss";

const CharacterDetails = (props) => {
	const { character, handleGetEpisodeData } = props;
	const history = useHistory();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const createdDate = new Date(character?.created);
	const episode = useSelector((state) => state.episode);
	const isLoading = useSelector((state) => state.loading.isLoading);
	const loadingError = useSelector((state) => state.loading.loadingError);

	useEffect(() => {
		if (character) handleGetEpisodeData(character.episode[0]);
	}, [character, handleGetEpisodeData]);

	const handleFetchEpisode = (episodeLink) => {
		handleGetEpisodeData(episodeLink);
	};

	return (
		<div className={styles.CharacterDetails__container}>
			{isLoading ? (
				<p>Loading Character Info...</p>
			) : loadingError && !character ? (
				<h4>Character Data Not Found</h4>
			) : (
				character && (
					<>
						<div className={styles.CharacterDetails__title}>
							<div
								className={styles.CharacterDetails__title__back}
								onClick={history.goBack}>
								<ArrowBack
									className={styles.CharacterDetails__title__back__icon}
								/>
								<span>Back</span>
							</div>
							<span className={styles.CharacterDetails__title__name}>
								{character.name}
							</span>
						</div>
						<div className={styles.CharacterDetails}>
							<img
								className={styles.CharacterDetails__image}
								src={character.image}
								alt={character.name}
							/>
							<div className={styles.CharacterDetails__list}>
								<span className={styles.CharacterDetails__list__item}>
									<strong>ID:</strong> {character.id}
								</span>
								<span className={styles.CharacterDetails__list__item}>
									<strong>Name: </strong> {character.name}
								</span>
								<span className={styles.CharacterDetails__list__item}>
									<strong>Status: </strong> {character.status}
								</span>
								<span className={styles.CharacterDetails__list__item}>
									<strong>Species: </strong> {character.species}
								</span>
								{character.type !== "" && (
									<span className={styles.CharacterDetails__list__item}>
										<strong>Type: </strong> {character.type}
									</span>
								)}
								<span className={styles.CharacterDetails__list__item}>
									<strong>Gender: </strong> {character.gender}
								</span>
								<span className={styles.CharacterDetails__list__item}>
									<strong>Origin: </strong>
									<a
										href={character.origin.url}
										target="_blank"
										rel="noreferrer">
										{character.origin.name}
									</a>
								</span>
								<span className={styles.CharacterDetails__list__item}>
									<strong>Created: </strong>{" "}
									{createdDate.toLocaleDateString("en-US", options)}
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
				)
			)}
		</div>
	);
};

export default CharacterDetails;
