import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {UPDATE_FREE_SLOTS, SUBMIT_COMPLETE} from './actions';

const freeSlots = (state = {}, action) => (action.type === UPDATE_FREE_SLOTS ? action.freeSlots : state);

const submitted = (state = false, action) => (action.type === SUBMIT_COMPLETE ? true : state);

export default combineReducers({
    form: formReducer,
    freeSlots,
    submitted,
});
