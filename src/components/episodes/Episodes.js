import React from "react";
import EpisodeTabs from "../episode-tabs/EpisodeTabs";

import styles from "./Episodes.modules.scss";

const Episodes = ({ episodes, episode, handleFetchEpisode }) => {
	return (
		<div className={styles.Episodes}>
			<EpisodeTabs
				episodes={episodes}
				handleFetchEpisode={handleFetchEpisode}
			/>
			<div className={styles.Episodes__details}>
				<span className={styles.Episodes__details__item}>
					<strong>Episode ID:</strong>
					{episode?.id}
				</span>
				<span className={styles.Episodes__details__item}>
					<strong>Episode Name:</strong>
					{episode?.name}
				</span>
				<span className={styles.Episodes__details__item}>
					<strong>Episode Air Date:</strong>
					{episode?.air_date}
				</span>
				<span className={styles.Episodes__details__item}>
					<strong>Episode:</strong>
					{episode?.episode}
				</span>
			</div>
		</div>
	);
};

export default Episodes;
