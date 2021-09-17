import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

export async function getCharacters(pageNumber, searchString, status, gender) {
	try {
		const response = await fetch(
			`${baseUrl}?page=${pageNumber}&name=${searchString}&status=${status}&gender=${gender}`
		);
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
