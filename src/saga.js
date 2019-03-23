import {takeEvery} from 'redux-saga/effects';
import {SUBMIT} from './actions';

export const submitForm = function* submitForm({values}) {
};

export default function* () {
    yield takeEvery(SUBMIT, submitForm);
}
