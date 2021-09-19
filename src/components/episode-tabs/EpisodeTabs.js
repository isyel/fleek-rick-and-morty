import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./EpisodeTabs.module.scss";

const EpisodeTabs = (props) => {
	const { episodes, handleFetchEpisode } = props;
	const [activeTab, setActiveTab] = useState(0);

	const handleActiveTab = (episodeLink, index) => {
		setActiveTab(index);
		handleFetchEpisode(episodeLink);
	};

	const getEpisodeNumber = (episodeUrl) => {
		const stringArray = episodeUrl.split("/");
		return stringArray[stringArray.length - 1];
	};

	return (
		<div className={styles.EpisodeTabs}>
			{episodes.slice(0, 5).map((episode, index) => (
				<div
					key={Math.random()}
					className={classNames(
						styles.EpisodeTabs__tab,
						activeTab === index && styles.EpisodeTabs__tab__active
					)}
					onClick={() => handleActiveTab(episode, index)}>
					{`Episode  ${getEpisodeNumber(episode)}`}
				</div>
			))}
		</div>
	);
};

EpisodeTabs.propTypes = {
	episodes: PropTypes.array.isRequired,
	handleFetchEpisode: PropTypes.func.isRequired,
};

export default EpisodeTabs;
