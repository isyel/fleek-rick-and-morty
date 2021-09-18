import * as types from "./actionTypes";
import * as episodeApi from "../../api/episodesApi";
import { apiCallError } from "./apiStatusActions";

export function getEpisodeDetailsSuccess(episode) {
	return { type: types.GET_EPISODE_DETAILS, episode };
}

export function getEpisodeData(episodeLink) {
	return function (dispatch) {
		return episodeApi
			.getEpisodeDetails(episodeLink)
			.then((episode) => {
				dispatch(getEpisodeDetailsSuccess(episode));
			})
			.catch((error) => {
				dispatch(apiCallError());
				throw error;
			});
	};
}
