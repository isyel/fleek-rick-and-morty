import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function pagesReducer(state = initialState, action) {
	switch (action.type) {
		case types.SAVE_PAGE_DATA:
			return { ...state, pageData: action.pageData };
		case types.CHANGE_PAGE_NUMBER:
			return {
				...state,
				pageNumber: action.pageNumber,
				queryParameters: state.queryParameters.map((queryParameter) =>
					queryParameter.name === "page"
						? { ...queryParameter, value: action.pageNumber }
						: queryParameter
				),
			};
		case types.SAVE_QUERY_PARAMETERS:
			return { ...state, queryParameters: action.queryParameters };
		default:
			return state;
	}
}

export default pagesReducer;
