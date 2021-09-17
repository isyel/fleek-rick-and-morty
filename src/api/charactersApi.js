import { handleResponse, handleError, generateQueryString } from "./apiUtils";
const baseUrl = "https://rickandmortyapi.com/api/character/";

export async function getCharacters(pageNumber, searchString, status, gender) {
	generateQueryString(pageNumber, searchString, status, gender);
	try {
		const response = await fetch(`${baseUrl}`);
		return handleResponse(response);
	} catch (error) {
		return handleError(error);
	}
}

export async function getSingleCharacter(characterId) {
	try {
		const response = await fetch(baseUrl + characterId);
		return handleResponse(response);
	} catch (error) {
		return handleError(error);
	}
}
