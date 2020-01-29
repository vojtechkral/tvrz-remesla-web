import * as R from 'ramda';
import {takeEvery, call, put, delay, select, spawn} from 'redux-saga/effects';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {mapKeys} from './utils';
import {SUBMIT, updateFreeSlots, submitComplete} from './actions';
import {getIds} from './selectors';
import {submit, getFreeSlots} from './api';

const submitForm = function* submitForm({values}) {
    const ids = yield select(getIds);
    const request = mapKeys(R.flip(R.prop)(ids), values);
    yield spawn(trackCustomEvent, {
        category: 'form',
        event: 'submit',
    });
    yield call(submit, request);
    yield put(submitComplete());
};

const loadFreeSlots = function* loadFreeSlots() {
    const freeSlots = yield call(getFreeSlots);
    yield put(updateFreeSlots(freeSlots));
};

export default function* () {
    if (typeof window !== 'undefined') {
        yield takeEvery(SUBMIT, submitForm);
        for (;;) {
            yield call(loadFreeSlots);
            yield delay(5000);
        }
    }
}
