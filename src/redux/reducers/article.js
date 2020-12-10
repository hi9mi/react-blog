const initialState = {
	rubricsItems: [],
	isLoaded: false,
};

const rubrics = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_RUBRICS':
			return {
				...state,
				rubricsItems: action.payload,
				isLoaded: true,
			};
		case 'SET_LOADED':
			return {
				...state,
				isLoaded: action.payload,
			};
		default:
			return state;
	}
};

export default rubrics;
