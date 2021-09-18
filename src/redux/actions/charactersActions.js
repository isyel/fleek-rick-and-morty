import * as types from "./actionTypes";
import * as charactersApi from "../../api/charactersApi";
import { apiCallError, beginApiCall, endApiCall } from "./apiStatusActions";
import { savePageData, changePageNumber } from "./pagesActions";

export function getAllCharactersSuccess(characters) {
	return { type: types.GET_CHARACTERS, characters };
}

export function getSingleCharacterSuccess(character) {
	return { type: types.GET_SINGLE_CHARACTER, character };
}

export function getAllCharacters() {
	return function (dispatch, getState) {
		dispatch(changePageNumber(1));
		dispatch(beginApiCall());
		return charactersApi
			.getCharacters(getState().pages.queryParameters)
			.then((response) => {
				console.log("response: ", response);
				dispatch(getAllCharactersSuccess(response.results));
				dispatch(savePageData(response.info));
				dispatch(endApiCall());
			})
			.catch((error) => {
				dispatch(endApiCall());
				dispatch(apiCallError());
				dispatch(getAllCharactersSuccess([]));
				console.log("Network Error: ", error);
			});
	};
}

export function getSingleCharacter(characterId) {
	return function (dispatch) {
		dispatch(beginApiCall());
		return charactersApi
			.getSingleCharacter(characterId)
			.then((character) => {
				dispatch(getSingleCharacterSuccess(character));
				dispatch(endApiCall());
			})
			.catch((error) => {
				dispatch(endApiCall());
				dispatch(apiCallError());
				throw error;
			});
	};
}
