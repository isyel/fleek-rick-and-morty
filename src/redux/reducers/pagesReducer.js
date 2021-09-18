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
		case types.ADD_QUERY_PARAMETERS:
			return {
				...state,
				queryParameters: [...state.queryParameters, action.queryParameter],
			};
		case types.UPDATE_QUERY_PARAMETERS:
			return {
				...state,
				queryParameters: state.queryParameters.map((queryParameter) =>
					queryParameter.name === action.queryParameter.name
						? { ...queryParameter, value: action.queryParameter.value }
						: queryParameter
				),
			};
		default:
			return state;
	}
}

export default pagesReducer;
