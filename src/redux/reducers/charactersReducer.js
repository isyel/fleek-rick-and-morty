import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function charactersReducer(state = initialState, action) {
	switch (action.type) {
		case types.GET_CHARACTERS:
			return { ...state, characters: action.characters };
		case types.GET_SINGLE_CHARACTER:
			return { ...state, singleCharacter: action.character };
		default:
			return state;
	}
}

export default charactersReducer;
