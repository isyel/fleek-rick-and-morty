import React from "react";
import PropTypes from "prop-types";

import EpisodeTabs from "../episode-tabs/EpisodeTabs";
import styles from "./Episodes.module.scss";

const Episodes = (props) => {
	const { episodes, episode, handleFetchEpisode } = props;
	return (
		<div className={styles.Episodes}>
			<EpisodeTabs
				episodes={episodes}
				handleFetchEpisode={handleFetchEpisode}
			/>
			{episode ? (
				<div className={styles.Episodes__details}>
					<span className={styles.Episodes__details__item}>
						<strong>Episode ID: </strong>
						{episode?.id}
					</span>
					<span className={styles.Episodes__details__item}>
						<strong>Episode Name: </strong>
						{episode?.name}
					</span>
					<span className={styles.Episodes__details__item}>
						<strong>Episode Air Date: </strong>
						{episode?.air_date}
					</span>
					<span className={styles.Episodes__details__item}>
						<strong>Episode: </strong>
						{episode?.episode}
					</span>
				</div>
			) : (
				<h4>Episode Data Not Found</h4>
			)}
		</div>
	);
};

Episodes.propTypes = {
	episodes: PropTypes.array.isRequired,
	episode: PropTypes.object,
	handleFetchEpisode: PropTypes.func.isRequired,
};

export default Episodes;
