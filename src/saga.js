import {takeEvery, call, put, delay} from 'redux-saga/effects';
import {SUBMIT, updateFreeSlots} from './actions';
import {submit, getFreeSlots} from './api';

export const submitForm = function* submitForm({values}) {
    yield call(submit, values);
};

export const loadFreeSlots = function* loadFreeSlots() {
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
