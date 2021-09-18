import { handleResponse, handleError } from "./apiUtils";

export async function getEpisodeDetails(episodeLink) {
	try {
		const response = await fetch(episodeLink);
		return handleResponse(response);
	} catch (error) {
		return handleError(error);
	}
}
