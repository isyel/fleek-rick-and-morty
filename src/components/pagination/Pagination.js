import React from "react";
import classnames from "classnames";

import { usePagination, DOTS } from "./usePagination";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
		totalPageCount,
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
		totalPageCount,
	});

	if (currentPage === 0 || !paginationRange || paginationRange?.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange?.length - 1];
	return (
		<ul
			className={classnames(styles.Pagination__container, {
				[className]: className,
			})}>
			<li
				className={classnames(
					styles.Pagination__item,
					currentPage === 1 && styles.Pagination__item__disabled
				)}
				onClick={onPrevious}>
				<div
					className={classnames(
						currentPage === 1
							? styles.Pagination__item__disabled__arrow
							: styles.Pagination__item__arrow,
						styles.Pagination__item__left
					)}
				/>
			</li>
			{paginationRange.map((pageNumber) => {
				if (pageNumber === DOTS) {
					return (
						<li
							className={classnames(
								styles.Pagination__item,
								styles.Pagination__item__dots
							)}
							key={pageNumber}>
							&#8230;
						</li>
					);
				}

				return (
					<li
						className={classnames(
							styles.Pagination__item,
							pageNumber === currentPage && styles.Pagination__item__selected
						)}
						onClick={() => onPageChange(pageNumber)}>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={classnames(
					styles.Pagination__item,
					currentPage === lastPage && styles.Pagination__item__disabled
				)}
				onClick={onNext}>
				<div
					className={classnames(
						currentPage === lastPage
							? styles.Pagination__item__disabled__arrow
							: styles.Pagination__item__arrow,
						styles.Pagination__item__right
					)}
				/>
			</li>
		</ul>
	);
};

export default Pagination;
