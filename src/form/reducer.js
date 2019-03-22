import * as R from 'ramda';
import {SET_VALUE} from './actions';

export default (state = {}, action) => (action.type === SET_VALUE
    ? R.set(R.lensProp(action.fieldName), action.value)(state)
    : state
);
