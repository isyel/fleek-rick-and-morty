import { handleResponse, handleError, generateQueryString } from "./apiUtils";
const baseUrl = "https://rickandmortyapi.com/api/character/";

export async function getCharacters(queryParameters) {
	try {
		const response = await fetch(generateQueryString(baseUrl, queryParameters));
		return handleResponse(response);
	} catch (error) {
		return handleError(error);
	}
}

export async function getSingleCharacter(characterId) {
	console.log("characterId: ", characterId);
	try {
		const response = await fetch(baseUrl + characterId);
		return handleResponse(response);
	} catch (error) {
		return handleError(error);
	}
}
