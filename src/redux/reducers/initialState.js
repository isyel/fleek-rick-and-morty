const initialState = {
	characters: {
		characters: [],
		singleCharacter: null,
	},
	episode: null,
	loading: {
		isLoading: false,
		loadingError: false,
	},
	pages: {
		pageData: null,
		pageNumber: 1,
		queryParameters: [{ name: "page", value: 1 }],
	},
};

export default initialState;
