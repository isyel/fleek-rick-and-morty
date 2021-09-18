import React, { useState } from "react";
import classNames from "classnames";

import styles from "./EpisodeTabs.module.scss";

const EpisodeTabs = (props) => {
	const { episodes, handleFetchEpisode } = props;
	const [activeTab, setActiveTab] = useState(0);

	const handleActiveTab = (episodeLink, index) => {
		setActiveTab(index);
		handleFetchEpisode(episodeLink);
	};

	return (
		<div className={styles.EpisodeTabs}>
			{episodes.map((episode, index) => (
				<div
					key={index}
					className={classNames(
						styles.EpisodeTabs__tab,
						activeTab === index && styles.EpisodeTabs__tab__active
					)}
					onClick={() => handleActiveTab(episode, index)}>
					{`Episode ${index + 1}`}
				</div>
			))}
		</div>
	);
};

export default EpisodeTabs;
