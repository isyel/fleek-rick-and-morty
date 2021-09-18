import React, { useState } from "react";

import SideBar from "../sidebar/SideBar";
import logo from "./../../assets/Rick_and_Morty_Logo.png";
import styles from "./Header.module.scss";

const Header = (props) => {
	const {
		handleGetCharactersWithFilters,
		queryParameters,
		handleAddQueryParameter,
		handleUpdateQueryParameters,
	} = props;
	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className={styles.Header}>
			<div className={styles.Header__container}>
				<span className={styles.Header__toggle} onClick={handleShowMenu}></span>
				<div className={styles.Header__logo}>
					<img src={logo} alt="Rick and Morty Logo" />
				</div>
			</div>
			{showMenu && (
				<div className={styles.Header__menuSidebar}>
					<SideBar
						handleGetCharactersWithFilters={handleGetCharactersWithFilters}
						queryParameters={queryParameters}
						handleAddQueryParameter={handleAddQueryParameter}
						handleUpdateQueryParameters={handleUpdateQueryParameters}
						isMenu={true}
						handleShowMenu={handleShowMenu}
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
