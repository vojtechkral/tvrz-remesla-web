import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {UPDATE_FREE_SLOTS} from './actions';

const freeSlots = (state = {}, action) => (action.type === UPDATE_FREE_SLOTS ? action.freeSlots : state);

export default combineReducers({
    form: formReducer,
    freeSlots,
});
