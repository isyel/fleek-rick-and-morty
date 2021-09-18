const initialState = {
	characters: [],
	singleCharacter: null,
	episode: null,
	isLoading: false,
	loadingError: false,
	pageData: null,
	pageNumber: 1,
	queryParameters: [{ name: "page", value: 1 }],
};

export default initialState;
