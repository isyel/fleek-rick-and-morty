const initialState = {
	characters: [],
	singleCharacter: null,
	isLoading: false,
	loadingError: false,
	pageData: null,
	pageNumber: 1,
	queryParameters: [{ name: "page", value: 1 }],
};

export default initialState;
