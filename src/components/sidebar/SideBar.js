import React from "react";
import { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import useDebounce from "../../util/useDebounce";
import styles from "./SideBar.module.scss";

const SideBar = (props) => {
	const {
		isMenu,
		handleGetCharactersWithFilters,
		queryParameters,
		handleAddQueryParameter,
		handleUpdateQueryParameters,
		handleShowMenu,
	} = props;
	const [searchString, setSearchString] = useState("");
	const [status, setStatus] = useState("");
	const [gender, setGender] = useState("");

	const statusTypes = [
		{ name: "Alive", value: "alive" },
		{
			name: "Dead",
			value: "dead",
		},
		{
			name: "Unknown",
			value: "unknown",
		},
	];

	const genderTypes = [
		{ name: "Female", value: "female" },
		{
			name: "Male",
			value: "male",
		},
		{
			name: "Genderless",
			value: "genderless",
		},
		{
			name: "Unknown",
			value: "unknown",
		},
	];

	const handleSetSearchString = (e) => {
		setSearchString(e.target.value);
	};

	const handleSetStatus = (e) => {
		setStatus(e.target.value);
	};

	const handleSetGender = (e) => {
		setGender(e.target.value);
	};

	useDebounce(() => handleCallApiWithQuery(), 600, [
		searchString,
		status,
		gender,
	]);

	const handleUpdateQuery = (queryObject) => {
		const query = queryParameters.find(
			(queryParameter) => queryParameter.name === queryObject.name
		);
		if (query) {
			handleUpdateQueryParameters(queryObject);
		} else {
			handleAddQueryParameter(queryObject);
		}
	};

	const handleCallApiWithQuery = () => {
		if (searchString !== null) {
			handleUpdateQuery({ name: "name", value: searchString });
		}
		if (status !== null) {
			handleUpdateQuery({ name: "status", value: status });
		}
		if (gender !== null) {
			handleUpdateQuery({ name: "gender", value: gender });
		}
		handleGetCharactersWithFilters();
	};

	return (
		<div className={styles.SideBar}>
			<div className={styles.SideBar__header}>
				<h4>Filter Characters</h4>
				<span
					className={classNames(
						styles.SideBar__header__close,
						isMenu ? styles.SideBar__show : styles.SideBar__hide
					)}
					onClick={handleShowMenu}></span>
			</div>

			<div className={styles.SideBar__search}>
				<input
					value={searchString}
					className={styles.SideBar__search__input}
					placeholder="Filter by name"
					type="search"
					onChange={handleSetSearchString}
				/>
			</div>
			<div className={styles.SideBar__status}>
				<select
					className={styles.SideBar__status__select}
					defaultValue={status}
					onChange={handleSetStatus}>
					<option value="">No status</option>
					{statusTypes.map((statusType) => (
						<option key={statusType.value} value={statusType.value}>
							{statusType.name}
						</option>
					))}
				</select>
			</div>
			<div className={styles.SideBar__gender}>
				<select
					className={styles.SideBar__gender__select}
					defaultValue={gender}
					onChange={handleSetGender}>
					<option value="">No gender</option>
					{genderTypes.map((genderType) => (
						<option key={genderType.value} value={genderType.value}>
							{genderType.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

SideBar.propTypes = {
	isMenu: PropTypes.bool,
	queryParameters: PropTypes.array.isRequired,
	handleAddQueryParameter: PropTypes.func.isRequired,
	handleUpdateQueryParameters: PropTypes.func.isRequired,
	handleShowMenu: PropTypes.func,
	handleGetCharactersWithFilters: PropTypes.func.isRequired,
};

export default SideBar;
