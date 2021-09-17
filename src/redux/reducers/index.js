import { combineReducers } from "redux";
import characters from "./charactersReducer";
import loading from "./loadingReducer";

const rootReducer = combineReducers({
	characters,
	loading,
});

export default rootReducer;
