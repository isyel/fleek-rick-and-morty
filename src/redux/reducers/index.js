import { combineReducers } from "redux";
import characters from "./charactersReducer";
import loading from "./loadingReducer";
import pages from "./pagesReducer";
import episode from "./episodeReducer";

const rootReducer = combineReducers({
	characters,
	loading,
	pages,
	episode,
});

export default rootReducer;
