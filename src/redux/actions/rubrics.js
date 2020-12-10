import axios from 'axios';

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});

export const fetchRubrics = (sortBy, rubric) => (dispatch) => {
	dispatch(setLoaded(false));
	axios
		.get(`/rubricsItems?${rubric !== null ? `rubric=${rubric}` : ''}&_sort=${sortBy}&_order=desc`)
		.then(({ data }) => {
			dispatch(setRubrics(data));
		});
};

export const setRubrics = (rubricsItems) => ({
	type: 'SET_RUBRICS',
	payload: rubricsItems,
});
