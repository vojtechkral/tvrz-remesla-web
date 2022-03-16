import * as R from 'ramda';
import {takeEvery, call, put, delay, select, spawn} from 'redux-saga/effects';
import {mapKeys} from './utils';
import {SUBMIT, updateFreeSlots, submitComplete} from './actions';
import {getIds} from './selectors';
import {submit, getFreeSlots} from './api';

const submitForm = function* submitForm({values}) {
    try {
        const ids = yield select(getIds);
        const request = mapKeys(R.flip(R.prop)(ids), values);
        yield spawn(window.gtag, 'submit');
        yield call(submit, request);
        yield put(submitComplete());
    } catch (e) {
        throw new Error(`Unable to submit form: ${e}`);
    }
};

const loadFreeSlots = function* loadFreeSlots() {
    try {
        const freeSlots = yield call(getFreeSlots);
        yield put(updateFreeSlots(freeSlots));
    } catch (e) {
        throw new Error(`Unable to load free slots: ${e}`);
    }
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
