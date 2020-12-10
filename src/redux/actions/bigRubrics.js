import axios from 'axios';

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});

export const fetchBigRubrics = (sortBy, rubric) => (dispatch) => {
	dispatch(setLoaded(false));
	axios
		.get(
			`/BigRubricItems?${rubric !== null ? `rubric=${rubric}` : ''}&_sort=${sortBy}&_order=desc`,
		)
		.then(({ data }) => {
			dispatch(setBigRubrics(data));
		});
};

export const setBigRubrics = (BigRubricItems) => ({
	type: 'SET_BIG_RUBRICS',
	payload: BigRubricItems,
});
