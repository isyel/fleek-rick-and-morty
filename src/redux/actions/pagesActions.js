import * as types from "./actionTypes";

export function changePageNumber(pageNumber) {
	return {
		type: types.CHANGE_PAGE_NUMBER,
		pageNumber,
	};
}

export function savePageData(pageData) {
	return {
		type: types.SAVE_PAGE_DATA,
		pageData,
	};
}

export function saveQueryParameter(queryParameters) {
	return {
		type: types.SAVE_QUERY_PARAMETERS,
		queryParameters,
	};
}
