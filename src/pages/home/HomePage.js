import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ArrowUp } from "./../../assets/arrow-up.svg";
import CharacterList from "../../components/character-list/CharacterList";
import Header from "../../components/header/Header";
import Pagination from "../../components/pagination/Pagination";
import SideBar from "../../components/sidebar/SideBar";
import { getAllCharacters } from "../../redux/actions/charactersActions";
import {
	addQueryParameter,
	changePageNumber,
	updateQueryParameter,
} from "../../redux/actions/pagesActions";
import styles from "./HomePage.module.scss";

const Home = () => {
	const characters = useSelector((state) => state.characters.characters);
	const isLoading = useSelector((state) => state.loading.isLoading);
	const loadingError = useSelector((state) => state.loading.loadingError);
	const pageNumber = useSelector((state) => state.pages.pageNumber);
	const pageData = useSelector((state) => state.pages.pageData);
	const queryParameters = useSelector((state) => state.pages.queryParameters);
	const dispatch = useDispatch();
	const scrollable = useRef();

	const buttonHandler = () => {
		const list = scrollable.current;
		list.scrollTop = 0;
	};

	useEffect(() => {
		dispatch(getAllCharacters());
	}, [dispatch]);

	const handleGetCharactersWithFilters = () => {
		dispatch(getAllCharacters());
	};

	const handleAddQueryParameter = (queryParameter) => {
		dispatch(changePageNumber(1));
		dispatch(addQueryParameter(queryParameter));
	};

	const handleUpdateQueryParameters = (queryParameter) => {
		dispatch(changePageNumber(1));
		dispatch(updateQueryParameter(queryParameter));
	};

	const handlePageChange = (pageNumber) => {
		dispatch(changePageNumber(pageNumber));
		handleGetCharactersWithFilters();
	};

	return (
		<div className={styles.HomePage}>
			<Header
				handleGetCharactersWithFilters={handleGetCharactersWithFilters}
				queryParameters={queryParameters}
				handleAddQueryParameter={handleAddQueryParameter}
				handleUpdateQueryParameters={handleUpdateQueryParameters}
				showToggle={true}
			/>
			<div className={styles.HomePage__container}>
				<div className={styles.HomePage__sideBar}>
					<SideBar
						handleGetCharactersWithFilters={handleGetCharactersWithFilters}
						queryParameters={queryParameters}
						handleAddQueryParameter={handleAddQueryParameter}
						handleUpdateQueryParameters={handleUpdateQueryParameters}
					/>
				</div>
				<div className={styles.HomePage__body} ref={scrollable}>
					{isLoading ? (
						<p>Loading...</p>
					) : loadingError && (!characters || characters.length === 0) ? (
						<p>No Data Available</p>
					) : (
						<>
							<CharacterList characters={characters} />
							<Pagination
								className={styles.HomePage__pagination}
								currentPage={pageNumber}
								totalCount={pageData?.count}
								pageSize={20}
								onPageChange={handlePageChange}
								totalPageCount={pageData?.pages}
							/>
							<ArrowUp
								className={styles.HomePage__scrollTop}
								onClick={buttonHandler}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
