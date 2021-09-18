import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function episodeReducer(state = initialState.episode, action) {
	switch (action.type) {
		case types.GET_EPISODE_DETAILS:
			return action.episode;
		default:
			return state;
	}
}

export default episodeReducer;
