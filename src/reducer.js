import * as R from 'ramda';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {UPDATE_FREE_SLOTS, SUBMIT_COMPLETE, REGISTER_SLOT_FIELD, REGISTER_FIELD} from './actions';

const freeSlots = (state = {}, action) => (action.type === UPDATE_FREE_SLOTS ? action.freeSlots : state);

const submitted = (state = false, action) => (action.type === SUBMIT_COMPLETE ? true : state);

const price = (state = {}, action) => (action.type === REGISTER_SLOT_FIELD ? R.set(R.lensProp(action.name))(action.price, state) : state);

const ids = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_SLOT_FIELD:
        case REGISTER_FIELD:
            return R.set(R.lensProp(action.name))(action.id, state);
        default:
            return state;
    }
};

const intervals = (state = [], action) => (action.type === REGISTER_SLOT_FIELD
    ? R.append(R.pick(['name', 'start', 'end', 'day'], action))(state)
    : state);

export default combineReducers({
    form: formReducer,
    freeSlots,
    submitted,
    price,
    ids,
    intervals,
});
