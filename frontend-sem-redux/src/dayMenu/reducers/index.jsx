import { combineReducers } from 'redux';
import { optionSelected } from "./optionSelected";

const rootReducer = combineReducers({
    optionSelected: optionSelected
});

export default rootReducer;