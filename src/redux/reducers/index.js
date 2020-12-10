import { combineReducers } from 'redux';
import bigRubricsReducer from './bigRubrics';
import filtersReducer from './filters';
import mRubricsReducer from './mRubrics';
import rubricsReducer from './rubrics';

const rootReducer = combineReducers({
	rubrics: rubricsReducer,
	bigRubrics: bigRubricsReducer,
	filters: filtersReducer,
	mRubrics: mRubricsReducer,
});

export default rootReducer;
