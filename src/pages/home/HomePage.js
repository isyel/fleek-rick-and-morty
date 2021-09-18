import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CharacterList from "../../components/character-list/CharacterList";
import Pagination from "../../components/pagination/Pagination";
import SideBar from "../../components/sidebar/SideBar";
import { getAllCharacters } from "../../redux/actions/charactersActions";
import { changePageNumber } from "../../redux/actions/pagesActions";
import styles from "./HomePage.module.scss";

const Home = () => {
	const characters = useSelector((state) => state.characters.characters);
	const isLoading = useSelector((state) => state.loading.isLoading);
	const loadingError = useSelector((state) => state.loading.loadingError);
	const pageNumber = useSelector((state) => state.pages.pageNumber);
	const pageData = useSelector((state) => state.pages.pageData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCharacters());
	}, [dispatch]);

	const handleGetCharactersWithFilters = () => {
		dispatch(getAllCharacters());
	};

	const handlePageChange = (pageNumber) => {
		dispatch(changePageNumber(pageNumber));
		handleGetCharactersWithFilters();
	};

	return (
		<div className={styles.HomePage}>
			<div className={styles.HomePage__sideBar}>
				<SideBar
					handleGetCharactersWithFilters={handleGetCharactersWithFilters}
					pageNumber={pageNumber}
				/>
			</div>
			<div className={styles.HomePage__body}>
				{isLoading ? (
					<p>Loading...</p>
				) : loadingError ? (
					<p>Error Loading</p>
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
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
