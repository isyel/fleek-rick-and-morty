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

export function saveQueryParameters(queryParameters) {
	return {
		type: types.SAVE_QUERY_PARAMETERS,
		queryParameters,
	};
}

export function updateQueryParameter(queryParameter) {
	return {
		type: types.UPDATE_QUERY_PARAMETERS,
		queryParameter,
	};
}

export function addQueryParameter(queryParameter) {
	return {
		type: types.ADD_QUERY_PARAMETERS,
		queryParameter,
	};
}
