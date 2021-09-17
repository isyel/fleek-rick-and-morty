import React from "react";
import PropTypes from "prop-types";

import styles from "./SingleCharacterPage.module.scss";

const SingleCharacterPage = (props) => {
	const { character } = props;
	return (
		<div className={styles.SingleCharacterPage}>
			This is single character page
		</div>
	);
};

SingleCharacterPage.propTypes = {
	character: PropTypes.object.isRequired,
};

export default SingleCharacterPage;
