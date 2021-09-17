import * as types from "./actionTypes";

export function beginApiCall() {
	console.log("call begin API call");
	return {
		type: types.BEGIN_API_CALL,
	};
}

export function endApiCall() {
	return {
		type: types.END_API_CALL,
	};
}

export function apiCallError() {
	return {
		type: types.API_CALL_ERROR,
	};
}
