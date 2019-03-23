import {takeEvery, call} from 'redux-saga/effects';
import {SUBMIT} from './actions';
import {submit} from './api';

export const submitForm = function* submitForm({values}) {
    const form = {
        'entry.2146001187': values.name,
        'entry.1672151647': values.email,
        'entry.2001535182': values.med1,
        'entry.863979832': values.med2,
        'entry.599933823': values.med3,
        'entry.1210935918': values.korale1,
        'entry.425127990': values.korale2,
        'entry.1590153636': values.korale3,
        'entry.2049723369': values.korale4,
        'entry.892378742': values.korale5,
        'entry.299497980': values.tkani1,
        'entry.132012809': values.tkani2,
        'entry.905015196': values.tkani3,
        'entry.1007779779': values.lucerna1,
        'entry.1997255898': values.lucerna2,
        'entry.1324063131': values.lucerna3,
        'entry.2108715331': values.nuz,
    };
    yield call(submit, form);
};

export default function* () {
    yield takeEvery(SUBMIT, submitForm);
}
