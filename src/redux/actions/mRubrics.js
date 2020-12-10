import axios from 'axios';

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});

export const fetchMediumRubrics = (sortBy, rubric) => (dispatch) => {
	dispatch(setLoaded(false));
	axios
		.get(
			`/MediumRubricItems?${
				rubric !== null ? `rubric=${rubric}` : ''
			}&_sort=${sortBy}&_order=desc`,
		)
		.then(({ data }) => {
			dispatch(setMediumRubrics(data));
		});
};

export const setMediumRubrics = (MediumRubricItems) => ({
	type: 'SET_MEDIUM_RUBRICS',
	payload: MediumRubricItems,
});
