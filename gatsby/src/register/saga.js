import * as R from 'ramda';
import GA from 'react-ga';
import {takeEvery, call, put, delay, select} from 'redux-saga/effects';
import {mapKeys} from './utils';
import {SUBMIT, updateFreeSlots, submitComplete} from './actions';
import {getIds} from './selectors';
import {submit, getFreeSlots} from './api';

const submitForm = function* submitForm({values}) {
    const ids = yield select(getIds);
    const request = mapKeys(R.flip(R.prop)(ids), values);
    yield call(setTimeout, () => GA.event({
        category: 'form',
        action: 'submit',
    }));
    yield call(submit, request);
    yield put(submitComplete());
};

const loadFreeSlots = function* loadFreeSlots() {
    const freeSlots = yield call(getFreeSlots);
    yield put(updateFreeSlots(freeSlots));
};

export default function* () {
    yield takeEvery(SUBMIT, submitForm);
    for (;;) {
        yield call(loadFreeSlots);
        yield delay(5000);
    }
}
