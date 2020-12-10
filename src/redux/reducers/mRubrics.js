const initialState = {
	MediumRubricItems: [],
	isLoaded: false,
};

const mediumRubrics = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_MEDIUM_RUBRICS':
			return {
				...state,
				MediumRubricItems: action.payload,
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

export default mediumRubrics;
