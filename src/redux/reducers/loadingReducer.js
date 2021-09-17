import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function loadingReducer(state = initialState, action) {
	switch (action.type) {
		case types.BEGIN_API_CALL:
			return { ...state, isLoading: true };
		case types.END_API_CALL:
			return { ...state, isLoading: false };
		case types.API_CALL_ERROR:
			return { ...state, loadingError: true };
		default:
			return state;
	}
}

export default loadingReducer;
