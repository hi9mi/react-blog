const initialState = {
	BigRubricItems: [],
	isLoaded: false,
};

const bigRubrics = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_BIG_RUBRICS':
			return {
				...state,
				BigRubricItems: action.payload,
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


export default bigRubrics;
