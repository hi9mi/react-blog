export const setSortBy = (name) => ({
	type: 'SET_SORT_BY',
	payload: name,
});

export const setRubric = (rubIndex) => ({
	type: 'SET_RUBRIC',
	payload: rubIndex,
});
