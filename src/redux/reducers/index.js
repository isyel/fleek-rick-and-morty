import { combineReducers } from "redux";
import characters from "./charactersReducer";
import loading from "./loadingReducer";
import pages from "./pagesReducer";

const rootReducer = combineReducers({
	characters,
	loading,
	pages,
});

export default rootReducer;
